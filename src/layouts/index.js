import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	
	componentDidMount() {
		
	}

	newTask = () => {
		console.log('Mostrar formulario para nueva tarea');
	}

	render() {
		return (
			<Layout className="layout">
				<Header>
					<div className={styles.logo}>Tasks</div>
				</Header>
				<Content style={{ padding: '25px 50px' }}>
					<div className={styles.content}>{this.props.children}</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					TaskList with React © 2018 Roxgüel
				</Footer>
			</Layout>
		);
	}
}

export default BasicLayout;
