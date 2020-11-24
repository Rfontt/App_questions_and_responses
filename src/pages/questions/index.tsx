import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import Api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Questions() {
	const navigation = useNavigation();

	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');


	const submit = async() => {
		if (title != '' && description != '') {
			await Api.post('/saveQuestions', {title, description});
			navigation.navigate("Home");
		}else {
			Alert.alert("Preencha todos os dados");
		}

	}

  return(
    <Container>
      	<Header>
	      	<ButtonHeader>
		 		<ButtonComeBack onPress = {() => navigation.navigate("Landing")}>
		 			<Ionicons name="ios-arrow-round-back" size={40} color="white" />
		 		</ButtonComeBack>
	 		</ButtonHeader>

	 		<Icon>
      			<MaterialIcons name="library-books" size={60} color="white" />
      		</Icon>
      	</Header>

      	<Footer> 
	      	<TitleText>  Tema da pergunta: </TitleText>
	      	<InputTitle placeholder="Estatística, derivada, geometria..." 
	      	 onChangeText={(text)=> setTitle(text)} />

	      	<DescriptionText>  Descrição: </DescriptionText>
	      	<InputDescription multiline={true} numberOfLines={4} 
	      	 placeholder="Preciso de ajuda..."
	         onChangeText={(text)=> setDescription(text)} />

	        <Button>
	      		<ButtonSubmit onPress={()=> submit()}>
	      			<TitleButtonSubmit> Perguntar </TitleButtonSubmit>
	      		</ButtonSubmit>
	      	</Button>
      	</Footer>


    </Container>
  )
}

const Container = styled.View`
	flex: 1;
`;

const Header = styled.View`
	flex: 0.9;
	background: #1E56A0;
`;

const ButtonHeader = styled.View`
	margin-top: 20;
	margin-left: 12;
	margin-right: 12;
`;

const ButtonComeBack = styled.TouchableOpacity`
	background: #1E56A0;
`;

const Icon = styled.View`
	justify-content: center;
	align-items: center;
`;

const Footer = styled.View`
	flex: 2;
	align-items: center;
`;

const TitleText = styled.Text`
	font-size: 18;
	color: #3465d9;
	font-weight: bold;	
	margin-top: 30;
`;

const DescriptionText = styled.Text`
	font-size: 18;
	color: #3465d9;	
	font-weight: bold;
	margin-top: 20;
`;

const InputTitle = styled.TextInput`
	margin-top: 20;
	background: white;
	height: 40;
	width: 300;
	border-radius: 8;
	padding-left: 20px;
	padding-right: 20px;
`;

const InputDescription = styled.TextInput`
	margin-top: 20;
	background: white;
	width: 300;
	padding-left: 20px;
	padding-right: 20px;
	height: 120;
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
	margin-top: 25;
`;

const TitleButtonSubmit = styled.Text`
	color: white;
	font-size: 14;
	font-weight: bold;
`;
