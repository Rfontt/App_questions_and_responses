import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import Api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface Questions {
	id: number;
	title: string;
	description: string;
}

interface Response {
	id: number;
	body: string;
}

interface IdQuestion {
	id: number;
}

export default function Questions() {
	const navigation = useNavigation();
	const route = useRoute();
	const params = route.params as IdQuestion;
	const [question, setQuestion] = useState<Questions>();
	const [response, setResponse] = useState<Response[]>([]);
	const [resp, setResp] = useState('');
	
	useEffect(()=> {
		Api.get(`/question/${params.id}`).then(response => {
			setQuestion(response.data.questionId);
		}) 
		Api.get<Response[]>(`/question/${params.id}`).then(response => {
			setResponse(response.data.responses);
		}) 
	}, [params.id])

	const submit = async() => {
		if (resp != '') {
			await Api.post(`/response/${params.id}`, {resp});
			Alert.alert("Resposta criada!");
			navigation.navigate("Response");
		}else {
			Alert.alert("Preencha todos os campos!");	
		}
	}

	if (!question) {
		return(
			<Loading> 
				<LoadingIcon size= "large" color= "#fff" /> 
			</Loading>
		)	
	}
	  return(
	    <Container>
	      	<Header>
		      	<ButtonHeader>
		 			<ButtonComeBack onPress = {() => navigation.navigate("Home")}>
		 				<Ionicons name="ios-arrow-round-back" size={40} color="white" />
		 			</ButtonComeBack>
	 			</ButtonHeader>
	      		<TitleView>
		    		<TitleText> {question.title} </TitleText>
		    	</TitleView>

		    	<DescriptionView>
		    		<DescriptionText> {question.description} </DescriptionText>
		    	</DescriptionView>
	      	</Header>

	      	<Footer> 
		      	
	      		<Response>
	      			<TitleResponse> Respostas: </TitleResponse>

	      			{response.map(res=> {
	      				return(
	      					<BodyOfResponse key = {res.id}>
	      						<TitleBodyOfResponse> {res.body} </TitleBodyOfResponse>
	      					</BodyOfResponse>
	      				)
	      			})}
	      		</Response>
	      		<Input>
	      			<InputResponse placeholder="Digite sua resposta"
	      			onChangeText={(text)=> setResp(text)} />
	      		</Input>
	      		
		        <Button>
		      		<ButtonSubmit onPress={()=> submit()}>
		      			<TitleButtonSubmit> Responder </TitleButtonSubmit>
		      		</ButtonSubmit>
		      	</Button>
	      	</Footer>

	    </Container>
	  )
	}

const Container = styled.View`
	flex: 1;
`;

const Loading = styled.View`
	flex: 1;
	background: #1E56A0;
	align-items: center;
	justify-content: center;	
`;

const LoadingIcon = styled.ActivityIndicator`
	flex:1;
`;

const Header = styled.View`
	flex: 0.9;
	background: #1E56A0;
	justify-content: center;
	align-items: center;
`;


const ButtonHeader = styled.View`
	margin-top: 10;
`;

const ButtonComeBack = styled.TouchableOpacity`
	background: #1E56A0;
	margin-right: 300;
`;

const TitleView = styled.ScrollView`
	flex: 0.3;
	border-radius: 5;
	margin-top: 15;
	background: white;
	height: 10;
	width: 300;
`;

const DescriptionView = styled.ScrollView`
	flex: 0.5;
	margin-top: 3;
	border-radius: 5;
	background: white;
	height: 5;
	width: 300;
	margin-bottom: 0.5;
`;


const TitleText = styled.Text`
	margin-top: 8;
	margin-bottom: 10;
	font-size: 18;
	color: black;
	font-weight: bold;	
	text-align: center;
`;

const DescriptionText = styled.Text`
	font-size: 15;
	color: #3465d9;	
	font-weight: bold;
	margin-top: 5;
	margin-left: 10;
`;

const Footer = styled.View`
	flex: 2;
	align-items: center;
`;

const Response = styled.ScrollView`
	flex: 1;
	margin-left: 10;
`;

const TitleResponse = styled.Text`
	text-align: center;
	font-size: 20;
	font-weight: bold;
	color: #1E56A0;
`;

const BodyOfResponse = styled.ScrollView`
	margin-top: 20;
	flex: 0.4;
	width: 280;
	height: 120;
	background: #1E56A0;
	border-radius: 8;
	padding-left: 4;
	padding-right: 4;
`;

const TitleBodyOfResponse = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 16;
	margin-top: 2;
`;

const Input = styled.View`
	flex: 1;
`;

const InputResponse = styled.TextInput`
	margin-top: 80;
	background: white;
	width: 300;
	padding-left: 20px;
	padding-right: 20px;
	height: 100;
`;

const Button = styled.View`
	flex: 1;
	align-items: center;
`;

const ButtonSubmit = styled.TouchableOpacity`
	background: #3465d9;
	margin-left: 10;
	border-radius: 10;
	width: 300;
	height: 40;
	justify-content: center;
	align-items: center;
	margin-top: 60;
`;

const TitleButtonSubmit = styled.Text`
	color: white;
	font-size: 14;
	font-weight: bold;
`;
