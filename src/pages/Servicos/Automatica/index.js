import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../../components/Loader';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import {
	ContainerCardPorta_1,
	ContainerCardPorta_2,
	ContentCardPorta,
	CardPortaTitulo,
	CardPortaDescricao,
	CardPortaImg,
	CardPortaMultiImg,
	ImgPrincipal,
	ImgsSecundarias,
	SubImgs,
	SubImgs_4,
	PaginaTitulo,
	PaginaSubtitulo
} from './styles';

import auto_fechada from '../../../assets/images/auto_fechada.png';
import autoF_1 from '../../../assets/images/portaF_1.png';
import autoF_2 from '../../../assets/images/portaF_2.png';
import autoF_3 from '../../../assets/images/portaF_3.png';
import autoF_4 from '../../../assets/images/portaF_4.png';
import auto_galv from '../../../assets/images/porta_galv.png';
import porta_tv from '../../../assets/images/porta_tv.png';
import porta_tv1 from '../../../assets/images/porta_tv1.png';
import porta_tv2 from '../../../assets/images/porta_tv2.png';
import porta_metade from '../../../assets/images/porta_metade.png';
import porta_metade1 from '../../../assets/images/porta_metade1.png';
import porta_metade2 from '../../../assets/images/porta_metade2.png';
import porta_metade3 from '../../../assets/images/porta_metade3.png';
import alcapao from '../../../assets/images/alcapao.png';
import alcapao_1 from '../../../assets/images/alcapao_1.png';
import cc from '../../../assets/images/cc.png';
import cc_1 from '../../../assets/images/cc_1.png';
import cc_2 from '../../../assets/images/cc_2.png';
import nobreak from '../../../assets/images/nobreak.png';
import NOBREAK_1 from '../../../assets/images/NOBREAK_1.png';
import pintura from '../../../assets/images/pintura.png';
import pintura_1 from '../../../assets/images/pintura_1.png';
import portinhola_1 from '../../../assets/images/portinhola_1.png';
import portinhola_2 from '../../../assets/images/portinhola_2.png';
import portinhola_3 from '../../../assets/images/portinhola_3.png';
import portinhola_4 from '../../../assets/images/portinhola_4.png';

export default function Servicos(){
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="portas" />

			<div className='parallaxPortasAutomaticas'>
				<h2 style={PaginaTitulo}>PORTAS AUTOMÁTICAS</h2>
			</div>
			{/* <FlexboxGrid justify="center" className="parallaxPortas" style={{paddingBottom: 100, paddingTop: 100, marginTop: '120px !important'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: 80}}>
					<h2 style={{textAlign: 'left', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Nossas Portas</h2>
				</FlexboxGrid.Item>
			</FlexboxGrid> */}

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Porta automática fechada</div>
						<p style={CardPortaDescricao}>
							A mais tradicional no mercado, com design totalmente fechado
							permitindo 100% de privacidade no interior do estabelecimento.
						</p>
						<p style={CardPortaDescricao}>
							São utilizadas geralmente em fábricas, galpões, lojas e comércios
							em geral.
						</p>
					</div>

					<div style={CardPortaMultiImg}>
						<img src={auto_fechada} style={ImgPrincipal}/>
						<div style={SubImgs_4}>
							<img src={autoF_1} style={{width: '22%'}}/>
							<img src={autoF_2} style={{width: '22%'}}/>
							<img src={autoF_3} style={{width: '22%'}}/>
							<img src={autoF_4} style={{width: '22%'}}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Porta automática galvanizada</div>
						<p style={CardPortaDescricao}>
							É um tipo de porta de aço especial que previne a ferrugem.
						</p>
						<p style={CardPortaDescricao}>
							O aço galvanizado é um material que passa pelo processo que leva
							o nome de galvanização, e é revestido por uma fina camada de zinco
							que impede a corrosão do material.
						</p>
					</div>
					<div style={CardPortaImg}>
						<img src={auto_galv} style={{width: '100%', maxWidth: '420px'}}/>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Porta automática transvision</div>
						<p style={CardPortaDescricao}>
							A porta transvision permite uma maior visibilidade no ambiente,
							além de possibilitar um maior alcance de luz e manter o local mais
							arejado mesmo com as portas fechadas.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={porta_tv} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={porta_tv1} style={ImgsSecundarias}/>
							<img src={porta_tv2} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>
							Porta automática <br/>
							metade transvision - metade fechada
						</div>
						<p style={CardPortaDescricao}>
							Possui as mesmas características de cada porta descrita acima,
							respectivamente, trazendo para o cliente maior ventilação e luz
							ambiente, sem deixar de lado a segurança e privacidade para o
							interior do estabelecimento.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={porta_metade} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={porta_metade1} style={ImgsSecundarias}/>
							<img src={porta_metade2} style={ImgsSecundarias}/>
							<img src={porta_metade3} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div className='parallaxPortasAutomaticas' style={{marginTop:'0'}}>
				<h2 style={PaginaTitulo}>ACESSORIOS</h2>
				<h3 style={PaginaSubtitulo}>Podem ser inseridos em qualquer tipo de porta automática.</h3>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Alçapão</div>
						<p style={CardPortaDescricao}>
							Em caso de falta de energia temos a forma de acessar o interior do
							estabelecimento utilizando o recurso da Portinhola Alçapão para
							Portas de Aço que se trata de um produto opcional que pode ser
							instalado na porta de enrolar para possíveis casos de emergências.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={alcapao} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={alcapao_1} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Central de controle</div>
						<p style={CardPortaDescricao}>
							A compra do KIT CONTROLE REMOTO PARA PORTA DE
							ENROLAR é considerada essencial para que a automatização
							deste item seja colocada em prática, uma vez que este produto
							é o principal responsável pela transmissão de comandos de
							abertura e fechamento da porta.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={cc} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={cc_1} style={ImgsSecundarias}/>
							<img src={cc_2} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Nobreak</div>
						<p style={CardPortaDescricao}>
							O benefício do nobreak para porta de enrolar é o “abre” e “fecha”
							sem interrupções.
						</p>
						<p style={CardPortaDescricao}>
							Ou seja, em caso de uma forte chuva ou de uma queda de árvore
							que afete as fiações da região do estabelecimento, cortando sua
							energia, o sistema entra em funcionamento imediatamente.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={nobreak} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={NOBREAK_1} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Pintura eletrostática</div>
						<p style={CardPortaDescricao}>
							A pintura eletrostática é uma das formas de pintura mais
							resistente e efetiva existente.
						</p>
						<p style={CardPortaDescricao}>
							Essa pintura utiliza um processo diferenciado por meio
							de cargas elétricas para a fixação da tinta.
						</p>
						<p style={CardPortaDescricao}>
							Na porta de enrolar ela é aplicada unicamente permitindo
							assim um acabamento perfeito.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={pintura} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={pintura_1} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Portinhola central e lateral</div>
						<p style={CardPortaDescricao}>
							A portinhola para porta de enrolar é uma abertura que serve
							para se ter um outro acesso ao interior do imóvel em caso de
							a porta principal não funcionar.
						</p>
						<p style={CardPortaDescricao}>
							Isso pode se dar pela falta de uma energia elétrica ou algum
							problema técnico, ou para entrada e saída do imóvel sem
							precisar de abrir e fechar a porta principal.
						</p>
						<p style={CardPortaDescricao}>
							Logo, vai de acordo com a necessidade do cliente, se a portinhola
							fica no centro ou na lateral da porta principal.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={auto_fechada} style={ImgPrincipal}/>
						<div style={SubImgs_4}>
							<img src={portinhola_1} style={{width: '22%'}}/>
							<img src={portinhola_2} style={{width: '22%'}}/>
							<img src={portinhola_3} style={{width: '22%'}}/>
							<img src={portinhola_4} style={{width: '22%'}}/>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
