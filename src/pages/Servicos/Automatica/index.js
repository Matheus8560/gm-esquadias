import React, { useEffect, useState } from 'react';
import { Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../../components/Loader';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
	ImagesAuto_1,
	ImagesAuto_3,
	ImagesAuto_4,
	ImagesAuto_5,
	ImagesAuto_6,
	ImagesAuto_7,
	ImagesAuto_8,
} from '../../../components/Galeries';

import {
	ContainerCardPorta_1,
	ContainerCardPorta_2,
	ContentCardPorta,
	CardPortaTitulo,
	CardPortaDescricao,
	DescricaoUltimoP,
	PaginaTitulo,
	PaginaSubtitulo
} from './styles';

import auto_galv from '../../../assets/images/porta_galv.png';
import porta_tv from '../../../assets/images/porta_tv.png';
import cc from '../../../assets/images/cc.png';
import pintura from '../../../assets/images/pintura.png';
import alcapao from '../../../assets/images/alcapao.png';

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
			<Header activeKey="porta-auto" />

			<div className='parallaxPortasAutomaticas'>
				<h2 style={PaginaTitulo}>PORTAS AUTOMÁTICAS</h2>
			</div>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<ImageGallery items={ImagesAuto_1} showFullscreenButton={false} showPlayButton={false} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Porta automática fechada</div>
						<p style={CardPortaDescricao}>
							A mais tradicional no mercado, com design totalmente fechado
							permitindo 100% de privacidade no interior do estabelecimento.
						</p>
						<p style={DescricaoUltimoP}>
							São utilizadas geralmente em fábricas, galpões, lojas e comércios
							em geral.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_1}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<img src={auto_galv} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Porta automática galvanizada</div>
						<p style={CardPortaDescricao}>
							É um tipo de porta de aço especial que previne a ferrugem.
						</p>
						<p style={DescricaoUltimoP}>
							O aço galvanizado é um material que passa pelo processo que leva
							o nome de galvanização, e é revestido por uma fina camada de zinco
							que impede a corrosão do material.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<img src={porta_tv} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Porta automática transvision</div>
						<p style={DescricaoUltimoP}>
							A porta transvision permite uma maior visibilidade no ambiente,
							além de possibilitar um maior alcance de luz e manter o local mais
							arejado mesmo com as portas fechadas.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_1}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<ImageGallery items={ImagesAuto_3} showFullscreenButton={false} showPlayButton={false} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>
							Porta automática <br/>
							metade transvision - metade fechada
						</div>
						<p style={DescricaoUltimoP}>
							Possui as mesmas características de cada porta descrita acima,
							respectivamente, trazendo para o cliente maior ventilação e luz
							ambiente, sem deixar de lado a segurança e privacidade para o
							interior do estabelecimento.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<div className='parallaxPortasAutomaticas' style={{marginTop:'0'}}>
				<h2 style={PaginaTitulo}>ACESSORIOS</h2>
				<h3 style={PaginaSubtitulo}>Podem ser inseridos em qualquer tipo de porta automática.</h3>
			</div>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<img src={alcapao} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Alçapão</div>
						<p style={DescricaoUltimoP}>
							Em caso de falta de energia temos a forma de acessar o interior do
							estabelecimento utilizando o recurso da Portinhola Alçapão para
							Portas de Aço que se trata de um produto opcional que pode ser
							instalado na porta de enrolar para possíveis casos de emergências.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_1}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<img src={cc} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Central de controle</div>
						<p style={DescricaoUltimoP}>
							A compra do KIT CONTROLE REMOTO PARA PORTA DE
							ENROLAR é considerada essencial para que a automatização
							deste item seja colocada em prática, uma vez que este produto
							é o principal responsável pela transmissão de comandos de
							abertura e fechamento da porta.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<ImageGallery items={ImagesAuto_6} showFullscreenButton={false} showPlayButton={false} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Nobreak</div>
						<p style={CardPortaDescricao}>
							O benefício do nobreak para porta de enrolar é o “abre” e “fecha”
							sem interrupções.
						</p>
						<p style={DescricaoUltimoP}>
							Ou seja, em caso de uma forte chuva ou de uma queda de árvore
							que afete as fiações da região do estabelecimento, cortando sua
							energia, o sistema entra em funcionamento imediatamente.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_1}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<img src={pintura} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Pintura eletrostática</div>
						<p style={CardPortaDescricao}>
							A pintura eletrostática é uma das formas de pintura mais
							resistente e efetiva existente.
						</p>
						<p style={CardPortaDescricao}>
							Essa pintura utiliza um processo diferenciado por meio
							de cargas elétricas para a fixação da tinta.
						</p>
						<p style={DescricaoUltimoP}>
							Na porta de enrolar ela é aplicada unicamente permitindo
							assim um acabamento perfeito.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<ImageGallery items={ImagesAuto_8} showFullscreenButton={false} showPlayButton={false} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
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
						<p style={DescricaoUltimoP}>
							Logo, vai de acordo com a necessidade do cliente, se a portinhola
							fica no centro ou na lateral da porta principal.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<Footer />
		</>
	);
}
