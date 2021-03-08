import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../../components/Loader';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { ImagesManutencao } from '../../../components/Galeries';

import {
	ContainerCardPorta_2,
	ContentCardPorta,
	CardPortaTitulo,
	CardPortaDescricao,
	DescricaoUltimoP,
	PaginaTitulo,
	ContainerCardPorta_1,
	CardContatoTitulo,
	CardContatoDescricao,
	BtnOrcamento,
	BtnWp
} from '../Automatica/styles';

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
			<Header activeKey="manutencao" />

			<div className='parallaxPortasManutencao'>
				<h2 style={PaginaTitulo}>MANUTENÇÃO</h2>
			</div>

			<Grid style={ContainerCardPorta_2}>
				<FlexboxGrid componentClass={Row} colspan={24} style={ContentCardPorta}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
						<ImageGallery items={ImagesManutencao} showFullscreenButton={false} showPlayButton={false} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={15}>
						<div style={CardPortaTitulo}>Manutenção</div>
						<p style={CardPortaDescricao}>
							Dependendo do caso, a manutenção porta de enrolar pode ser
							simples e realizada na mesma hora.
						</p>
						<p style={CardPortaDescricao}>
							Se a sua porta estiver com muito ruído, laminas amassadas,
							movimentação lenta ou outros sinais preocupantes.
							Nossa equipe técnica vai até o local para avaliação geral da porta.
							Dependendo do problema, a manutenção porta de enrolar pode
							ser executada na mesma hora.
						</p>
						<p style={DescricaoUltimoP}>
							Fique atento, caso sua porta exiba algum tipo de ação diferente do
							comum ou uma deformidade física, agende um serviço de manutenção
							porta de enrolar para um melhor funcionamento da sua porta.
						</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			<div style={ContainerCardPorta_1}>
				<div style={{ alignItems: 'left' }}>
					<div style={CardContatoTitulo}>Se interessou?</div>
					<p style={CardContatoDescricao}>Aproveita e faça seu orçamento! Entre em contato.</p>

					<Grid>
						<Row>
							<Col xs={24} md={6}>
								<Button size="lg" style={BtnOrcamento} href="/contato">
									Orçamento
								</Button>
							</Col>
							<Col xs={24} md={6}>
								<Button size="lg" style={BtnWp} appearance="ghost" onClick={() => window.location.href='https://api.whatsapp.com/send?phone=5521990162015'}>
									Whatsapp
								</Button>
							</Col>
						</Row>
					</Grid>

				</div>
			</div>

			<Footer />
		</>
	);
}
