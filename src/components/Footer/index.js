import React from 'react';
import { Footer, FlexboxGrid, Col, Icon  } from 'rsuite';
import Nav from '../../components/Nav';

import {
	ContainerHeader,
	ContainerLogo,
	Logo,
	ContainerContato,
	ContainerFooterItem,
	ContentFooter,
	FooterIcon,
	IconFooter,
	FooterDescricao,
	ContainerTelefone,
	ContainerIconTelefone,
	IconTelefone,
	ContainerDescricaoTelefone,
	ContainerSocial,
	IconFacebook,
	IconInstagram,
	BtnWhatsapp


} from './styles';

import '../../styles/fonts.css';

import logo from '../../assets/images/logo.png';
import iconLocalizacao from '../../assets/images/localizacao.png'
import iconTelefone from '../../assets/images/contato.png'
import iconFacebook from '../../assets/images/facebook.png'
import iconInstagram from '../../assets/images/instagram.png'

const FoorterComponent = ({ active, onSelect }) => (
	<Footer>
		<FlexboxGrid justify="space-around" align="middle" style={ContainerHeader}>
				{/* Localização */}
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={4}  style={(window.innerWidth < 992) ? {...ContainerFooterItem, justifyContent: 'center', paddingLeft: '0px !important', width:'100%'} : {...ContainerFooterItem, justifyContent: 'center'}}>
					<div style={ContentFooter}>
						<div style={FooterIcon}>
							<img src={iconLocalizacao} style={IconFooter} />
						</div>
						<div style={FooterDescricao}>
							<h3 style={{marginBottom: '10px'}}>Endereço</h3>
							<span>Rua Batista de Oliveira, Lote 5 Quadra 69.</span>
							<span>Duque de Caxias, RJ</span>
						</div>
					</div>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={4}  style={(window.innerWidth < 992) ? {...ContainerFooterItem, justifyContent: 'center', paddingLeft: '0px !important', width:'100%'} : {...ContainerFooterItem, justifyContent: 'center'}}>
					<div style={ContentFooter}>
						<div style={FooterIcon}>
							<img src={iconTelefone} style={IconFooter} />
						</div>
						<div style={FooterDescricao}>
							<h3 style={{marginBottom: '10px'}}>Contato</h3>
							<span>(21) 99016-2015</span>
							<span>(21) 99268-8273</span>
							<span>(21) 99247-2063</span>
						</div>
					</div>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={4}  style={(window.innerWidth < 992) ? {...ContainerFooterItem, justifyContent: 'center', paddingLeft: '0px !important', width:'100%'} : {...ContainerFooterItem, justifyContent: 'center'}}>
					<div style={ContentFooter}>
						<div style={FooterDescricao}>
							<h3 style={{marginBottom: '10px'}}>Redes Sociais:</h3>
							<span style={{marginBottom: '10px'}}>Nos siga nas redes sociais e saiba mais sobre nós.</span>
							<span>
								<img src={iconFacebook} style={IconFacebook} onClick={() => window.location.href='https://facebook.com'}/>
								<img src={iconInstagram} style={IconInstagram} onClick={() => window.location.href='https://instagram.com'} />
							</span>
						</div>
					</div>
				</FlexboxGrid.Item>
				{/* Telefones */}
				{/* <FlexboxGrid.Item componentClass={Col} colspan={24} md={4}  style={(window.innerWidth < 992) ? {...ContainerTelefone, alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '0px !important', marginLeft: '25%', marginTop: 20} : {...ContainerTelefone, justifyContent: 'center'}}>
					<div style={ContainerIconTelefone}>
						<img src={iconTelefone} style={IconTelefone} />
					</div>
					<div style={ContainerDescricaoTelefone}>
						<h3 style={{color: '#FFFFFF'}}>Telefones</h3>
						<h4 style={{lineHeight: '15px', letterSpacing: '.1rem', marginBottom: '10px'}}>(21) 99016-2015</h4>
						<h4 style={{lineHeight: '15px', letterSpacing: '.1rem', marginBottom: '10px'}}>(21) 99268-8273</h4>
						<h4 style={{lineHeight: '15px', letterSpacing: '.1rem'}}>(21) 99247-2063</h4>

					</div>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={4}  style={(window.innerWidth < 992) ? {...ContainerSocial, justifyContent: 'flex-start', paddingLeft: '0px !important', marginLeft: '30%', marginTop: 20} : {...ContainerSocial, justifyContent: 'center'}}>
					<img src={iconFacebook} style={IconFacebook} onClick={() => window.location.href='https://facebook.com'}/>
					<img src={iconInstagram} style={IconInstagram} onClick={() => window.location.href='https://instagram.com'} />
				</FlexboxGrid.Item> */}
				{/* <FlexboxGrid.Item style={{padding: '1% 0', display: 'flex', justifyContent: 'center'}} componentClass={Col} colspan={24} md={24}>
					<h6 style={{marginTop: 60, color: '#FFF', textAlign: 'center'}}>CNPJ: 21.815.032/0001-15</h6>
				</FlexboxGrid.Item> */}
		</FlexboxGrid>
		<a href="https://api.whatsapp.com/send?phone=5521990162015" style={BtnWhatsapp} className="btn-wpp"><Icon icon="whatsapp" style={{ color: '#FFF', fontSize: '3rem' }} /></a>
	</Footer>
);

export default FoorterComponent;
