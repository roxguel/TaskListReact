import styles from './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
	return (
		<Layout className="layout">
			<Header>
				<div class={styles.logo} />
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
				<div class={styles.content}>{props.children}</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				TaskList with React © 2018 Roxgüel
    		</Footer>
		</Layout>
	);
}

export default BasicLayout;
