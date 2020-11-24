# Indíce:
---
- [Sobre o projeto](-Sobre-o-projeto)
- [Passos a seguir](Passos-a-seguir)
- [Noções iniciais](Noções-iniciais)
- [Pacotes](Pacotes)
- [Pastas](Estrutura-das-pastas)
- [Navigation](Pasta-navigation)
- [Landing page](Landing-page)
- [Question page](Question-page)
- [Home page](Home-page)
- [Response page](Response-page)

# Imagens do projeto
---

<img align="center" src="./githubImg/gifOne.gif" alt="SlideOfPhotos">

<img align="center" src="./githubImg/gifTwo.gif" alt="PageQuestion">

<img align="center" src="./githubImg/gifTree.gif" alt="PageHome">

<img align="center" src="./githubImg/gifFour.gif" alt="PageResponse">

# Tecnologias usadas
---
- React native ;
- Expo;
- Typescript;
- Node(Api);
- Canvas.

# Sobre o projeto
---

Esse projeto trata-se de um aplicativo de perguntas e respostas. Em alguns projetos atrás eu havia feito um site que também fazia essa mesma interação, porém o mesmo não havia sido criado utilizando api, então fiz uma api baseada naquele backend e resolvi criar um app. Dito isso, **vamos a prática.**

# Passos a seguir:

- [x] Iniciar com typescript o react native(Nesse projeto foi usado expo);
- [x] Fazer uma pasta que contenha todas as outras pastas que irá conter os arquivos tsx;
- [x] Fazer o arquivo principal de navegação com o stack navigation;
- [x] Fazer um arquivo que faça a conexão com a api;
- [x] Consumir a api com axios;
- [x] Chamar a api nos arquivos das páginas Home, Questions e Response;
- [x] Estilizar a aplicação.

# Noções iniciais
---

Esse projeto foi feito em typescript e por isso têm algumas coisas que não encontramos no JavaScript. Irei explicar como funciona a lógica das rotas e a de consumir uma api com Typescript. Então não me alongarei em partes de estilizações.

# Pacotes
---
```
yarn add @react-navigation/native ou npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

expo install @react-navigation/stack

expo install styled-components

yarn add axios ou npm install axios

yarn add react-native-swiper ou npm install react-native-swiper


```


# Estrutura das pastas
---
Por questão de organização separei cada arquivo em suas respectivas pastas.

<br />

**Ficando assim a seguinte estrutura:**
<br />

- Src: é a pasta principal que contêm todas as outras pastas com seus respectivos arquivos.

    - Navigation: vai ficar responsável pelas rotas.

       - Pages: Vai ficar responsável por guardar as pastas que contêm os arquivos das páginas: landing, home, questions e response.

         - Services: Vai ficar responsável por guardar o arquivo que faz referência a api.
           - @types: Vai ficar responsável por permitir o uso de imagens no typescript.

# Pasta navigation
---
Essa pasta é a principal, através dela podemos andar por qualquer lugar que contenha uma rota para seguir.
Imagine que a navigation é um trem que leva tudo a qualquer lugar, contato que esteja dentro dele. É exatamente isso que ela faz, navega entre as páginas e permite que as outras páginas possam navegar entre si, contato que as mesmas estejam dentro desse arquivo de navegação.

<br />

Aqui você vai ter a seguinte estrutura de importação:

```

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/landing';
import Home from '../pages/home';
import Questions from '../pages/questions';
import Response from '../pages/response';

```
**Lembre-se de instalar o react-navigation e react-stack-navigation**

<br />

Essa estrutura nos diz que Landing, Home, Questions e Response estão prestes a entrar no trem(Que é o NavigationContainer), mas que cada uma vai para rotas diferentes(Para isso o createStackNavigator).
Com essa associação podemos concluir que aqui já podemos colocá-las em seus determinados lugares.

**Antes de prosseguirmos precisamos instânciar o createStackNavigator.**

```
const Stack = createStackNavigator();

```
O createStackNavigator é importantíssimo para que esses arquivos possam, não apenas ter sua própria rota como também ter um nome que as identifiquem.

```
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name= "Landing"
        component={Landing}
        options={{ headerShown: false }} />

        <Stack.Screen name="Home"
        component={ Home }
        options={{ headerShown: false }}/>

        <Stack.Screen name="Questions"
        component={ Questions }
        options={{ headerShown: false }} />

        <Stack.Screen name="Response"
        component={ Response }
        options={{ headerShown: false }} />
    </Stack.Navigator>
</NavigationContainer>

```
Você vai se depara com essas linhas de códigos no arquivo stacknavigation.tsx da pasta navigation e caso não entenda releia essa seguinte explicação: <br />

Perceba que o
```
<NavigationContainer> </NavigationContainer>
```
 está englobando todo o resto das linhas de código. Isso porque, como na associação dita anteriormente, ele é o responsável por conduzir todas as rotas, tudo que está dentro dele pode ir a diversos lugares, por isso a similaridade do trem.
Logo em seguida temos variações do uso da Stack, que é uma instância do createStackNavigator passada para dentro da constante Stack. Com ela pode-se indicar um container para cada arquivo e sua determinada rota.

O primeiro a se comentar é o:

```
<Stack.Navigator>

</Stack.Navigator>
```
**Que permite que os arquivos possam interagir entre si futuramente.**

Em segundo:
```
 <Stack.Screen name= "Landing"
    component={Landing}
    options={{ headerShown: false }} />

```
**Essa linha de código é de extrema importância, pois ela é cada um dos arquivos que contém o conteúdo das páginas e através desse código podemos manusear esses arquivos e mostrá-lo ao usuário.**

Depois disso esse arquivo precisa ser referenciado em outro arquivo, o qual é o principal: App.tsx. É ele que renderiza todo o html, css e js em forma visual para o usuário.

# Landing page
---
Agora que temos o arquivo de rotas configurado, já podemos iniciar o conteúdo dos outros arquivos. O primeiro dele é a landing page, a qual vai ser apenas um componente de apresentação do app, nele não terá ainda o consumo de uma api.
Portanto, é visto nele apenas um swiper, que nada mais é que um slide de conteúdos, no caso dele, de fotos. Isso, pelo fato de ser algo mais visual e por isso fica a sua disposição incluir mais detalhes e estilizá-lo, caso queira.
Também possui dois buttons, os quais são responsáveis por navegar entre as pages: Realizar perguntas e home de perguntas.

# Question page
---

### Sobre essa página:

Esta será a página de perguntas, nela conterá dois inputs que recebem os valores do title e da description, respectivamente e um button para enviar esses dados.


**Essa página é bem simples, pois pega apenas dois dados e enviar para api com o método post, nela ainda não é preciso declarar tipagem de atributos.**

<br />

Vamos iniciar com um ponto importante dessa página, que é o hook useState, os hooks do React serão explicados melhor na próxima página, mas irei me aprofundar em explicar a dinâmica do useState nesta página.

### useState:

O useState é um hook que guarda dados que podem mudar de estados sem sobrescreverem e sem precisar de muitas manutenções.
Essa página em específico usa apenas o useState, pois ele irá guardar o valor que o usuário digitar e setá-lo na api.

**Primeiro importe-o**
```
import React, { useState } from 'react';

```

**Em seguida defina-o**

```
const [ title, setTitle ] = useState('');
const [ description, setDescription ] = useState('');

```

Esse código a cima nos diz que as variáveis title e setTitle recebem a instância do useState com um valor inicial vazio. Isso também se aplica as variáveis description e setDescription.
Com o useState instanciado podemos agora o utilizá-lo para armazenar os valores que o usuário digitar nos inputs.

```
 <TitleText>  Tema da pergunta: </TitleText>
	<InputTitle placeholder="Estatística, derivada, geometria..."
	 onChangeText={(text)=> setTitle(text)} />

 <DescriptionText>  Descrição: </DescriptionText>
	<InputDescription multiline={true} numberOfLines={4}
	 placeholder="Preciso de ajuda..."
	 onChangeText={(text)=> setDescription(text)} />
```

Com o  ```onChangeText={(text)=> setTitle(text)} />``` setamos o valor que o usuário digite e a copiamos para a o parâmetro(text) da arrow function. Isso também ocorre no input description:
```onChangeText={(text)=> setDescription(text)} /> ```

Mas até então ainda não foi enviado nenhum dado para api. Isso é resolvido com o button que receberá a função de enviar esses dados para lá. Então primeiro vamos criar a função.

```
const submit = async() => {
	if (title != '' && description != '') {
		await Api.post('/saveQuestions', {title, description});
		navigation.navigate("Home");
	}else {
		Alert.alert("Preencha todos os dados");
	}
}

```
Aqui criamos uma constante que recebe uma função async, a mesma realiza uma condição: caso as variáveis title e description não estejam vazias os dados serão enviados para a api. Caso estejam vazias será enviado uma caixa de alerta pedindo para que preencha todos os dados.
```
	await Api.post('/saveQuestions', {title, description});

```
Nessa linha de código é onde ocorre o a ligação da api com o front-end. Estamos usando usando o método post e passando o end-point da aplicação, logo após enviamos as variáveis que contêm os valores do usuário, como estamos trabalhando json enviamos entre {}.

**Agora só é preciso chamar essa função.**

```
<Button>
   <ButtonSubmit onPress={()=> submit()}>
      <TitleButtonSubmit> Perguntar </TitleButtonSubmit>
   </ButtonSubmit>
</Button>

```
E assim finalizamos a criação de uma resposta.

# Home page
---
### Sobre essa página:

A home page servirá para renderizar na tela  as perguntas que os usuários já fizeram. Ela também permitirá que o usuário navegue para a página, na qual poderá respondê-las.

**Aqui já iremos iniciar com o consumo da api.**
É perceptível nesse arquivo a existência de códigos diferenciados do JavaScript, isso porque o Typescript vai precisar de configurações mais específicas sobre a tipagem.   
A home vai ser composta, basicamente por um useEffect que vai renderizar na tela o conteúdo que está na api.

**Para isso é preciso referenciar o arquivo onde está ocorrendo a conexão com a api:**

```
import Api from '../../services/api';
```
Com isso feito já podemos utilizar os métodos que o axios nos permite para percorrer as rotas que essa api tem.

**Para compreender o que ocorre nessa página e até mesmo nas outras você precisa entender sobre o funcionamento dos hooks do React.**

Primeiramente, precisamos guardar o estado desses valores que estão vindo da api no useState. Ele vai ser de grande ajuda, pois os dados são dinâmicos e a cada momento pode surgir novas perguntas e é preciso deixar isso variando sem precisar de manutenção a cada momento. Com isso em mente, já é compreensível que teremos que utilizar outro hook para ajudar na  dinamicidade: o **useEffect** que vai tratar os arrays de dados que virão da api, os quais estão guardados numa variável que contém a instância do useState.

**Lembre-se sempre de importá-los antes**

```
import React, { useState, useEffect } from 'react';
```

**Vamos por partes, começando com o uso do useState:**


```
const [questions, setQuestions] = useState([]);
```
Isso que estamos fazendo é uma desestruturação em que criamos duas variáveis em apenas uma linha de código.O useState recebe um array, pois na api temos o array que contém todas as perguntas.

A diferença do TS para o JS é justamente a questão das declarações de interfaces, então para esse useState possa setar os valores da api, precisamos criar essa interface para que ele compreenda o tipo de valores que estão vindo para ele.

```
interface IQuestions {
	id: number;
	title: string;
	description: string;
}

```
Essa é uma parte de extrema importância, porque com isso podemos indentificar os valores que estão vindo da api e são eles: id, title e description com os valores, respectivamente, number, string e string.

**Mas só isso não é o bastante e por isso precisamos fazer uma modificação no useState para que ele compreenda esses valores.**

```
const [questions, setQuestions] = useState<IQuestions[]>([]);

```

Com isso feito podemos seguir agora com o useEffect:

```
useEffect(()=> {
  Api.get<IQuestions[]>('/allQuestions').then(response => {
    setQuestions(response.data.questions);
  })
}, [])

```
Nesta configuração estamos pedindo, através do useEffect, para que toda vez que a tela iniciar ele carregue(set) as informações que estão na rota '/allQuestions',  na qual é uma rota get, ou seja, de busca de dados. Nela é possível capturar os dados por meio de uma variável response, a qual é criada na promisse e para obter esses dados precisamos usá-la com o método *.data* (response.data). Só que nessa rota os dados estão dentro de um array nomeado question, então é preciso mencioná-lo(response.data.question). <br />

Note que a *Api.get* também recebe as configurações de tipo da interface *<IQuestions[]>* isso porque ela é um array de dados que segue determinados tipos e é preciso indicá-los para que futuramente possamos percorrê-los sem nenhum problema.

**É importante que você olhe a estrutura da api para que compreenda esses fatos.**

### Terminando essas etapas importantes podemos enfim percorrer esse array e mostrar seus dados na tela para o usuário.

```
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

```
**Fiz com styled-components a estilização então estás tags são apenas um encapsulamento da View, Text e TouchableOpacity.**

Aqui é utilizado o .map para percorrer esse array. Como guardamos o resultado dele na variável questions podemos passar uma nova instância dessa variável para uma outra chamada question a qual agora tem acesso ao id, title e description.

**Por fim precisamos incluir mais uma lógica a está estrutura de dados, com o useNavigation podemos passar dados da api desse componente para outros componentes. Isso vai ser de extrema importância para que possamos mostrar uma única pergunta ao usuário.**

```
function navigateToMakeResponse(id: number){
	navigation.navigate("Response", { id });
}
```

Essa função serve para fazer uma navegação para a página Response e estamos passando para ela um parâmetro, sendo este o id. Como estamos trabalhando com typescript precisamos declarar seu tipo, no seu caso: number.
Entretanto, apenas isso não é o suficiente, porque precisamos chamar essa função em algum lugar e para isso funcionar utilizaremos o botão de responder que guiará o usuário a página response contendo o id como bagagem.

```
<Button>
	<ButtonResponse onPress = {()=> navigateToMakeResponse(question.id)}>
	 	<TitleButtonResponse> Responder </TitleButtonResponse>
	</ButtonResponse>
</Button>
```
Com isso estamos, através do onPress, fazendo uma arrow function que retorna a função que criamos a cima e passando o parâmetro question(variável que recebe o estado com os dados da api) especificando que queremos, de todos os seus valores, apenas o id.

**Agora já podemos passar para a página de respostas.**


# Response page
---

### Sobre essa página:

Aqui será a página de respostas, ela é a junção de uma api get e post, pois além de mostrarmos a pergunta de um usuário específico, também temos o input de envio de resposta.

**É preciso que tenha conhecimento de useState e useEffect para continuar**


Antes de tudo precisamos de mais um método do framework react-navigation: o useRoute. Lembra-se que passamos o id na navegação da home page para a response page? Então, precisamos capturar esse dado agora(No caso me refiro ao id).

**Primeiro importe o useRoute:**

```
import { useRoute } from '@react-navigation/native';

```
**Dessa forma, prossiga criando uma uma interface para o Typescript compreender o tipo desse atributo que está vindo do useRoute:**

```
interface IdQuestion {
	id: number;
}

```

**Agora usamos antes de prosseguirmos precisamos instânciar o useRoute, igual fazemos com o useState para que uma variável possa recebe seus valores:**

```
const route = useRoute();

```
**Agora a variável route possui a instância do useRoute, porém precisamos de algo específico dessa instância, o parâmetro que foi enviado para ela: o id. Para que possamos usar esse parâmetro é preciso criar uma instância que receba esse parâmetro:**

```
const params = route.params as IdQuestion;

```
Além de recebemos o parâmetro da rota, passamos para ele o tipo que é declarado na interface IdQuestion, agora ele já pode ser usado.

**Agora vamos precisar de mais duas interfaces para os respectivos arrays de questions e responses:**


```
interface Questions {
	id: number;
	title: string;
	description: string;
}

interface Response {
	id: number;
	body: string;
}

```

Lembre-se que isso é uma exigência para consiguirmos capturar esses valores e mostrá-los ao usuário.

**Feito isso, vamos ao useState passar para ele esses campos e instânciá-lo nas variáveis responsáveis por receber tais valores.**

```
const [question, setQuestion] = useState<Questions>();
const [response, setResponse] = useState<Response[]>([]);
```

Isso não é nada novo, pois foi feito em outros arquivos antes desse.

**Como iremos ter um input de resposta também, então precisamos definir mais um state que guarde esse valor variente.**

```
const [resp, setResp] = useState('');

```

Estamos prontos para carregar as informações necessárias ao usuário e permitir que o mesmo envie uma resposta, só precisamos, com um useEffect fazer a primeira ação e com uma função enviar os dados para api.

**Vamos utilizar, novamente para isso, o useEffect:**

```
useEffect(()=> {
	Api.get(`/question/${params.id}`).then(response => {
		setQuestion(response.data.questionId);
	})
	Api.get<Response[]>(`/question/${params.id}`).then(response => {
		setResponse(response.data.responses);
	})
}, [params.id])
```

Estamos pegando dados da api com o método get na rota /questions e passando para ela nosso id(que está na variável params). Ele recebe algo, então tratamos com uma promisse e em seguida setamos esse valor. A única diferença é que estamos pegando esses valores de arrays diferentes, são eles: questionId e responses. Além disso, estamos passando o params.id como dependência do useEffect para caso ele mude não tenha interferências.


### Array questionId:

```

<TitleView>
	<TitleText> {question.title} </TitleText>
</TitleView>

<DescriptionView>
	<DescriptionText> {question.description} </DescriptionText>
</DescriptionView>

```
Esse não necessita de um map, pois ele foi mandado por outra rota, então só precisamos pegar da variável que o guarda, o seu valor.


**Agora é preciso fazer um map para percorrer o array response**

```
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

```

**E por para finalizar, criamos um input para receber as respostas e um button para enviá-las**


### Input:

```
<Input>
	<InputResponse placeholder="Digite sua resposta"
	 onChangeText={(text)=> setResp(text)} />
</Input>
```

Antes do button, vamos criar a função que executará a ação de enviar para a api.

```
const submit = async() => {
	if (resp != '') {
		await Api.post(`/response/${params.id}`, {resp});
		Alert.alert("Resposta criada!");
		navigation.navigate("Response");
	}else {
		Alert.alert("Preencha todos os campos!");
	}
}

```

Essa função realiza uma chamada a api com o método post na rota /response juntamente com um parâmetro de id, que é a nossa variável params com o seu atributo id e passa para ela a variável que guarda o valor que o usuário digitou e a qual armazena a instância do useState, a resp(que significa resposta).

**Agora é só fazer um button que execute essa função**

```
<Button>
	<ButtonSubmit onPress={()=> submit()}>
		<TitleButtonSubmit> Responder </TitleButtonSubmit>
	</ButtonSubmit>
</Button>

```		      	


E assim finalizamos todas as pages. Você pode acrescentar autenticação, atualização ou deleção. Obrigada.
