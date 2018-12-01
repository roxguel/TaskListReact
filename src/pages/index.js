import { Layout, Row, Col } from 'antd';
import { Component } from 'react';
import { TaskService } from "../services/TaskService";
import TaskItem from "../components/TaskItem";

export default class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
		this.taskService = new TaskService();
	}
	
	componentDidMount() {
		this.taskService.all().then(tasks => {
			this.setState({tasks: tasks});
		}).catch(console.log);
	}

	listTasks() {
		const taskItems = this.state.tasks.map(task =>
			<Col className="gutter-row" span={6}>
				<TaskItem task={task} />
			</Col>
		);
		return taskItems;
	}

	/**
	 * @todo Muestra las tarjetas de forma desordenada.
	 */
	render() {
		return (
			<Layout.Content>
				<Row gutter={10} type="flex">
					{this.listTasks()}
				</Row>
			</Layout.Content>
		);
	}
}