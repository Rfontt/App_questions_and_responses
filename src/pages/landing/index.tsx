import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import ImagemOne from '../imagens/logo-slideOne.png';
import ImagemTwo from '../imagens/logo-slideTwo.png';
import ImagemTree from '../imagens/logo-slideTree.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Landing() {

	const navigation = useNavigation();
	return (
		<Container>
			<Swiper loop = {false}  showsButtons={true}>
				<SlideOne>

					<Title>
						Guia Exatas
						<AntDesign name="calculator" size={25} color="white" />
					</Title>
					<LogoImage source = {ImagemOne} />

				</SlideOne>

				<SlideTwo>

					<TitleSlideTwo>
						Comece agora tirando suas dúvidas
						<MaterialCommunityIcons name="comment-question-outline" size={35} color="white" />
					</TitleSlideTwo>
					<Image source = {ImagemTwo} />

				</SlideTwo>

				<SlideTree>
					<LogoImage source = {ImagemTree} />
				</SlideTree>
			</Swiper>

			<Buttons>
				<ButtonPrimary onPress={() => navigation.navigate("Questions")}> 
					<TitleButtonPrimary>
						Perguntar 
					</TitleButtonPrimary>
				</ButtonPrimary>

				<ButtonSecondary onPress={()=> navigation.navigate("Home")} >
					<TitleButtonSecondary>
						Ver perguntas
					</TitleButtonSecondary>
					
				</ButtonSecondary>
			</Buttons>
		</Container>
	)
}


const Container = styled.View`
	flex: 1;
	background: white;
`;

const SlideOne = styled.View`
	flex: 1;
	background: #3465d9;
	align-items: center;
	margin-bottom: 60;
`;

const SlideTwo = styled.View`
	flex: 1;
	background: #5c5fff;
	align-items: center;
`;

const SlideTree = styled.View`
	flex: 1;
	background: #dadada;
	align-items: center;
	justify-content: center;
`;


const Image = styled.Image`
	width: 400;
	height: 260;
`;

const LogoImage = styled.Image`
	width: 400;
	height: 280;
`;

const Title = styled.Text`
	margin-top: 40;
	font-size: 25;
	color: #dadada;
`;

const TitleSlideTwo = styled.Text`
	margin-top: 40;
	font-size: 18;
	color: white;
	font-weight: bold;
`;

const Buttons = styled.View`
	flex: 1.2;
	align-items: center;
	justify-content: center;
	background: white;
`;
const ButtonPrimary = styled.TouchableOpacity`
	background: #3465d9; 
	border-radius: 10;
	width: 300;
	height: 50;
	justify-content: center;
	align-items: center;
`;

const ButtonSecondary = styled.TouchableOpacity`
	background: white;
	border: 1px solid;
	border-radius: 10;
	width: 300;
	height: 50;
	justify-content: center;
	margin-top: 12;
	align-items: center;
`;

const TitleButtonPrimary = styled.Text`
	color: white;
	font-size: 14;
	font-weight: bold;
`;

const TitleButtonSecondary = styled.Text`
	color: #3465d9;
	font-size: 14;
	font-weight: bold;
`;
