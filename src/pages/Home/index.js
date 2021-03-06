import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
	ContainerAtendimento24,
	CardAtendimento24,
	ContainerServicosParallax,
	ContainerCardServicosParallax,
	CardServicosImg,
	CardServicosParallax,
	ContainerCardImgServicosParallax,
	ContainerCardDescricaoServicosParallax,
	ContainerPortas,
	CardPortaDivisao,
	ContainerHeaderPortas,
	ContainerCardPorta_1,
	ContainerCardPorta_2,
	CardTrabalhos
} from './styles';


import iconInstalacao from '../../assets/images/servico_1.jpg'
import iconManutencao from '../../assets/images/servico_2.jpg'
import icon_lupa from '../../assets/images/icon_lupa.png'
import icon_aviao from '../../assets/images/icon_aviao.png'
import icon_config from '../../assets/images/icon_config.png'
import icon_human from '../../assets/images/icon_human.png'
import circle_one from '../../assets/images/circle_one.png'
import circle_two from '../../assets/images/circle_two.png'
import circle_tree from '../../assets/images/circle_tree.png'
import circle_four from '../../assets/images/circle_four.png'
import porta_1 from '../../assets/images/porta_1.jpg';
import porta_2 from '../../assets/images/porta_2.jpg';
import porta_3 from '../../assets/images/porta_3.jpg';
import porta_4 from '../../assets/images/porta_4.jpg';
import porta_5 from '../../assets/images/porta_5.jpg';
import porta_6 from '../../assets/images/porta_6.jpg';
import porta_7 from '../../assets/images/porta_7.jpg';
import porta_8 from '../../assets/images/porta_8.jpg';
import porta_9 from '../../assets/images/porta_9.jpg';
import porta_manual from '../../assets/images/porta_manual.jpg';
import porta_auto from '../../assets/images/porta_auto.jpg';

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState('home');

	const AutoplaySlider = withAutoplay(AwesomeSlider);

	const handleSelect = (activeKey) => {
		setActive(activeKey);
	}

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
		Aos.init({duration: 2000});
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="home" />
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={6000}
				className="homeCarrossel"
				animation="cubeAnimation"
				style={{height: '400px !important', marginTop: '120px !important'}}
			>
				<div className="slider_1">
					<div>
						<h2>H?? mais de 17 anos no mercado de portas autom??ticas</h2>
						<p>Trabalhamos com diversos tipos de portas!</p>
						<Button size="lg" href="/contato" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_2">
					<div>
						<h2>Com solu????es a qualquer momento.</h2>
						<h2>24 horas por dia!</h2>
						<p>Com agilidade e efici??ncia.</p>
						<Button size="lg" href="/contato" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_3">
					<div>
						<h2>Trabalhamos com essel??ncia! </h2>
						<h2> Seja na instala????o ou manuten????o.</h2>
						<p>N??o perca tempo, venha nos conhecer!</p>
						<Button size="lg" href="/contato" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
			</AutoplaySlider>

			{/* TENDIMENTO 24H */}
			<Grid data-aos="fade-up" style={ContainerAtendimento24}>
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item componentClass={Col} colspan={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
						<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Atendimento <span style={{color: '#004DBB'}}>24 Horas</span> </h2>
						<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#6B6969', fontFamily: 'Roboto', fontWeight: 600}}>
							Com o nosso maior diferencial, solucionamos os problemas inesperados
							de nossos clientes. Damos assist??ncia t??cnica 24 horas nas portas
							autom??ticas com atendimento especializado.
						</strong>
					</FlexboxGrid.Item >
					<FlexboxGrid.Item componentClass={Col} colspan={24} style={{marginLeft: 115, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
						<FlexboxGrid justify="center" className="container-atendimento-24-orders">
							<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={CardAtendimento24} className="card-lupa">
								<img src={icon_lupa} />
								<h3 className="title-atendimento24 title-atendimento24-lupa" style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: 700}}>Primeiro Contato <img src={circle_one} style={{width: '2rem', height: '2rem'}} /> </h3>
								<span style={{fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700,}}>O Cliente entra em contato conosco.</span>
							</FlexboxGrid.Item>
							<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={CardAtendimento24} className="card-human">
								<img src={icon_human} />
								<h3 className="title-atendimento24 title-atendimento24-human" style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: 700}}>Situa????o-Problema <img src={circle_two} style={{width: '2rem', height: '2rem'}} /> </h3>
								<span style={{fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700, }}>Ap??s a explica????o do ocorrido, orientamos <br/> o cliente de forma clara e detalhada.</span>
							</FlexboxGrid.Item>
							<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={CardAtendimento24} className="card-lupa">
								<img src={icon_aviao}  />
								<h3 className="title-atendimento24 title-atendimento24-deslocamento" style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: 700}}>Deslocamento <img src={circle_four} style={{width: '2rem', height: '2rem'}} /> </h3>
								<span style={{fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700,}}>Ap??s todo o processo de an??lise da <br/> emerg??ncia e recursos para o servi??o, <br/> iniciamos o deslocamento at??  <br/> o cliente.</span>
							</FlexboxGrid.Item>
							<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={CardAtendimento24} className="card-human">
								<img src={icon_config}  />
								<h3 className="title-atendimento24" style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: 700}}>Recursos <img src={circle_tree} style={{width: '2rem', height: '2rem'}} /> </h3>
								<span style={{fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700,}}>Momento de Prepara????o dos recursos <br/> para a solu????o solicitada.</span>
							</FlexboxGrid.Item>
						</FlexboxGrid>
					</FlexboxGrid.Item>

				</FlexboxGrid>
			</Grid>

			{/* NOSSOS SERVI??OS */}
			<Grid style={ContainerServicosParallax} className="parallax">
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
						<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Nossos Servi??os</h2>
					</FlexboxGrid.Item>
				</FlexboxGrid>
				<FlexboxGrid  justify="center" style={ContainerCardServicosParallax}>
					<FlexboxGrid.Item data-aos="fade-up" componentClass={Col} colspan={24} md={10} style={CardServicosParallax}>
						<div style={ContainerCardImgServicosParallax}>
							<img style={CardServicosImg} src={iconInstalacao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem', marginBottom: '10px'}}>INSTALA????O</h3>
							<p style={{color: '#707070', fontWeight: '550', fontFamily: 'Helvetica', fontSize: '1rem', marginBottom: '10px'}}> Realizamos instala????es de portas autom??ticas e manuais com os melhores profissionais e produtos.</p>
							<p style={{color: '#707070', fontWeight: '550', fontFamily: 'Helvetica', fontSize: '1rem'}}> Deixamos o cliente satisfeito com o trabalho apresentado.</p>
						</div>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item data-aos="fade-up" componentClass={Col} colspan={24} md={10} style={CardServicosParallax}>
						<div style={ContainerCardImgServicosParallax}>
							<img style={CardServicosImg} src={iconManutencao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem', marginBottom: '10px'}}>MANUTEN????O</h3>
							<p style={{color: '#707070', fontWeight: '550', fontFamily: 'Helvetica', fontSize: '1rem', marginBottom: '10px'}}>Com nossos profissionais, entregamos um servi??o com qualidade de forma que a manuten????o fa??a o produto desempenhar um bom funcionamento. </p>
							<p style={{color: '#707070', fontWeight: '550', fontFamily: 'Helvetica', fontSize: '1rem'}}>Desta forma, melhorando o prolongamento de sua vida ??til, evitando transtornos inesperados.</p>
						</div>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			{/* NOSSAS PORTAS */}
			<Grid  style={ContainerPortas}>
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={24}>
						<h2 style={ContainerHeaderPortas}> Nossas <span style={{color: '#004DBB'}}>Portas</span> </h2>
					</FlexboxGrid.Item>
				</FlexboxGrid>

				<FlexboxGrid componentClass={Row} colspan={24} data-aos="fade-right" style={ContainerCardPorta_1}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={10} style={{ textAlign: 'end', marginBottom: '10px'}}>
						<img src={porta_auto} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
						<h2 className='card-porta-titulo'>Portas autom??ticas</h2>
						<div style={CardPortaDivisao}/>
						<p className='card-porta-descricao'>
							Utilizada pela praticidade do dia a dia, as portas
							autom??ticas de enrolar s??o a solu????o perfeita para
							todos os segmentos, trazendo seguran??a e facilidade.
						</p>
						<Button size="lg" href="/portas-automaticas" style={{width: '40%', borderRadius: '15px'}} className="btn-saiba-mais-portas rs-col-xs-10 rs-col-md-6">Saiba mais</Button>
					</FlexboxGrid.Item>
				</FlexboxGrid>

				<FlexboxGrid componentClass={Row} colspan={24} data-aos="fade-left" style={ContainerCardPorta_2}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={10} style={{ textAlign: 'start', marginBottom: '10px' }}>
						<img src={porta_manual} style={{width: '100%'}}/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
						<h2  className='card-porta-titulo'>Portas manuais</h2>
						<div style={CardPortaDivisao}/>
						<p className='card-porta-descricao'>
							Reconhecidas por serem as portas de menor
							custo benef??cio do mercado e com a????o manual,
							elas s??o dur??veis, podendo chegar a 3 metros
							de largura.
						</p>
						<Button size="lg" href="/portas-manuais" style={{width: '40%', borderRadius: '15px'}} className="btn-saiba-mais-portas rs-col-xs-10 rs-col-md-6">Saiba mais</Button>
					</FlexboxGrid.Item>
				</FlexboxGrid>

			</Grid>

			{/* Nossos Trabalhos */}
			<FlexboxGrid data-aos="fade-up" className="rs-hidden-xs rs-hidden-sm" justify="center" style={{...ContainerPortas, marginBottom: '50px'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
					<h2 style={ContainerHeaderPortas}> Alguns de Nossos <span style={{color: '#004DBB'}}>Trabalhos:</span> </h2>
				</FlexboxGrid.Item>
				<FlexboxGrid justify="space-around" align="middle">
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_2} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_3} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_4} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_5} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_6} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_7} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_8} style={CardTrabalhos} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={11} md={7} style={{marginBottom: 10}}>
						<img src={porta_9} className="ultima-imagem" style={CardTrabalhos} />
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</FlexboxGrid>
			<Footer/>
		</>

	);
}
