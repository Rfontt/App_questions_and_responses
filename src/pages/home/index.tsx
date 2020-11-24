import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface IQuestions {
	id: number;
	title: string;
	description: string;
}

export default function Home() {
	const navigation = useNavigation();
	const [questions, setQuestions] = useState<IQuestions[]>([]);

	useEffect(()=> {
		Api.get<IQuestions[]>('/allQuestions').then(response => {
			setQuestions(response.data.questions);
		})
	}, [])

	function navigateToMakeQuestions(){
		navigation.navigate("Questions");
	}

	function navigateToMakeResponse(id: number){
		navigation.navigate("Response", { id });
	}
	if (!questions) {
		return(
			<Loading>
				<LoadingIcon size= "large" color= "#fff" />
			</Loading>
		)
	}

  	return(
 		<Container>
 			<Buttons>
	 			<ButtonComeBack onPress = {() => navigation.navigate("Landing")}>
	 				<Ionicons name="ios-arrow-round-back" size={40} color="white" />
	 			</ButtonComeBack>

	 			<ButtonMakeQuestions onPress = {() => navigateToMakeQuestions()}>
	 				<FontAwesome name="question-circle" size={30} color="white" />
	 			</ButtonMakeQuestions>
 			</Buttons>

 			<BlocoOne>
 		 		<TitlePrincipal> Perguntas atuais: </TitlePrincipal>
 		 	</BlocoOne>

 			<BlocoOne>
 				{questions.map(question => {
 					return (
 						<BlocoTwo key = {question.id}>
	 						<TitleView>
	 							<TitleText> { question.title } </TitleText>
	 						</TitleView>

	 						<DescriptionView>
	 							<DescriptionText> {question.description} </DescriptionText>
	 						</DescriptionView>
							
	 						<Button>
	 							<ButtonResponse onPress = {()=> navigateToMakeResponse(question.id)}>
	 								<TitleButtonResponse>
	 									Responder
	 								</TitleButtonResponse>
	 							</ButtonResponse>
	 						</Button>
 						</BlocoTwo>

 					)
 				})}
 			</BlocoOne>
 		</Container>
	)
}

const Container = styled.ScrollView`
	flex: 1;
	background: #1E56A0;
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

const Buttons = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20;
	margin-left: 12;
	margin-right: 12;
`;

const ButtonComeBack = styled.TouchableOpacity`
	background: #1E56A0;
`;

const ButtonMakeQuestions = styled.TouchableOpacity`
	background: #1E56A0;
`;

const BlocoOne = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;

`;

const BlocoTwo = styled.View`
	flex: 1;
	margin-top: 10;
	align-items: center;
	justify-content: center;
	margin-bottom: 12;
`;

const TitleView = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	border-radius: 5;
	margin-top: 10;
	background: white;
	height: 50;
	width: 300;
`;

const DescriptionView = styled.ScrollView`
	flex: 1;
	margin-top: 2;
	border-radius: 5;
	background: white;
	height: 130;
	width: 300;
`;

const TitleText = styled.Text`
	color: black;
	font-size: 16;
	font-weight: bold;
`;

const DescriptionText = styled.Text`
	color: #3465d9;
	font-size: 13;
	margin-left: 10;
`;

const TitlePrincipal = styled.Text`
	margin-top: 10;
	color: white;
	font-size: 20;
	font-weight: bold;
`;

const Button = styled.View`
	flex: 1;
	margin-top: 8;
	margin-left: 140;
`;

const ButtonResponse = styled.TouchableOpacity`
	background: #3465d9;
	margin-left: 10;
	border-radius: 10;
	width: 150;
	height: 40;
	justify-content: center;
	align-items: center;
`;

const TitleButtonResponse = styled.Text`
	color: white;
	font-size: 14;
	font-weight: bold;
`;
