import React, { useEffect, useState } from 'react';
import { Button, Notification, Col, FlexboxGrid, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar  } from 'rsuite';
import emailjs from 'emailjs-com';
import Iframe from 'react-iframe';
// require('dotenv').config();

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconTelefone from '../../assets/images/contato.png'
import iconWhatsapp from '../../assets/images/wpp.png'

export default function Contato(){
	const [loading, setLoading] = useState(true);
	const [field, setField] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}

	const phoneMask = value => {
		return value
			.replace(/\D/g, '')
			.replace(/^(\d{2})(\d)/g,"($1) $2")
			// .replace(/(\d{3})(\d)/, '$1-$2')
			.replace(/(\d)(\d{4})$/,"$1-$2")
	}

	const config = {
		SERVICE_ID: 'service_46ny7aw',
		TEMPLATE_ID: 'template_krm9gpm',
		USER_ID: 'user_6ehakQPiBH08iM5Jufs3r'
	}

	const handleSubmit = async () => {
		setLoading(true);
		console.log(field)

		if(!field.name || (!field.email && !field.phone) || !field.message){
			Notification.error({
				title: 'Preencha os Campos Obrigatórios (*)',
				duration: 20000,
				description: ''
			});

		} else {
			emailjs.init(config.USER_ID);
			emailjs.sendForm(config.SERVICE_ID, config.TEMPLATE_ID, '#myForm')
			.then((result) => {
				// setLoading(false);
				Notification.success({
					title: 'Mensagem Enviada!',
					duration: 20000,
					description: ''
				});
			}, (error) => {
				// setLoading(false);
				// setLoading(false);
				Notification.error({
					title: 'Erro ao Enviar Mensagem!',
					duration: 20000,
					description: ''
				});
			});

			setField({
				name: '',
				email: '',
				phone: '',
				message: '',
			});
		}


		setTimeout(() => setLoading(false), 3000);


	}
	// function sendEmail(e) {
	// 	e.preventDefault();

	// 	emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
	// 	  .then((result) => {
	// 		  console.log(result.text);
	// 	  }, (error) => {
	// 		  console.log(error.text);
	// 	  });
	// }

	return (
		<>
			<Header activeKey="contato" />
			<FlexboxGrid justify="center" className="parallaxContato" style={{paddingBottom: 150, paddingTop: 150, marginTop: '120px !important'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={21} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
					<h2 style={{textAlign: 'left', fontSize: '2.3rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 800}}>Entre em Contato!</h2>
					<p style={{marginTop: 40, textAlign: 'left', fontSize: '1.2rem', color: '#FFF', fontFamily: 'Roboto', fontWeight: 100}}>
						Estamos prontos para atende-lo(a)! Entretanto, precisamos que você realize o preenchimento do formulário ao lado.
						Desta forma, retornaremos o contato!
					</p>
					<div className="contato-tels">
						<div className="contato-tels-icone">
							<img src={iconTelefone}/>
						</div>
						<div className="contato-tels-numeros">
							<span>(21) 99016-2015</span>
							<span>(21) 99268-8273</span>
							<span>(21) 99247-2063</span>
						</div>
					</div>
					{/* <strong style={{width: '100%', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700, marginTop: 40, fontSize: '1rem' }}>
						<img src={iconTelefone} style={{ width: '2rem', height: '2rem', marginRight: '2%'}} /> (21) 99016-2015 | (21) 99268-8273 | 99247-2063
					</strong> */}
					<Button onClick={() => window.location.href='https://api.whatsapp.com/send?phone=5521990162015'} size="lg" className="rs-col-xs-24 rs-col-md-6" style={{background: '#4CAF50', marginTop: 60, color: '#FFF'}}>
						<img src={iconWhatsapp} className="btn-whatsapp" style={{ width: '2rem', height: '2rem', marginRight: '2%'}} /> Whatsapp
					</Button>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<FlexboxGrid justify="space-around" style={{background: '#f7f7f7'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={20} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 80}}>
					<Form fluid className="rs-col-xs-24 rs-col-md-24" method="POST" id="myForm">
						<FormGroup>
							<ControlLabel>*Nome</ControlLabel>
							<FormControl name="name" value={field.name} onChange={value => setField({ ...field, name: value })} />
						</FormGroup>
						<FormGroup>
							<ControlLabel>*E-mail</ControlLabel>
							<FormControl name="email" type="email" value={field.email} onChange={value => setField({ ...field, email: value })} />
						</FormGroup>
						<FormGroup>
							<ControlLabel>*Telefone</ControlLabel>
							<FormControl name="phone" type="tel" value={field.phone} onChange={value => setField({ ...field, phone: phoneMask(value)})} />
						</FormGroup>
						<FormGroup>
							<ControlLabel>*Mensagem</ControlLabel>
							<FormControl rows={5} name="message" value={field.message} onChange={value => setField({ ...field, message: value })} componentClass="textarea" />
						</FormGroup>
						<FormGroup>
							<ButtonToolbar>
								<Button onClick={() => handleSubmit()} style={{alignSelf: 'center'}} className="btn-enviar rs-col-xs-24 rs-col-md-12">Enviar</Button>
							</ButtonToolbar>
						</FormGroup>
					</Form>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={20} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 80, paddingBottom: 80}}>
					<Iframe
						url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4785770714434!2d-43.230770585406994!3d-22.635938533952334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990b36a5edfad9%3A0xdf6ed99a0e273404!2sR.%20Batista%20de%20Oliveira%2C%20195%20-%20lote%2005%2C%20QD%2069%20-%20Rio%20Imbari%C3%AA%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025266-210!5e0!3m2!1spt-BR!2sbr!4v1615214211121!5m2!1spt-BR!2sbr"
						width="100%" height={533}
					/>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<Footer/>
		</>
	);
}
