import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	componentDidMount() {
		// console.log(this.props.children.props);
	}
	render() {
		return (
			<Layout className="layout">
				<Header>
					<div className={styles.logo} />
					<Menu
						theme="dark"
						mode="horizontal"
						selectable={false}
						defaultSelectedKeys={['1']}
						style={{ lineHeight: '64px' }}>
						<Menu.Item key="1">Tasks</Menu.Item>
						<Menu.Item>New Task</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Tasks</Breadcrumb.Item>
					</Breadcrumb>
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
