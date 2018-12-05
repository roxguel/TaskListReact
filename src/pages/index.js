import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import Masonry from 'react-masonry-component';
import TaskItem from "../components/TaskItem";
import TaskDrawerForm from "../components/TaskDrawer";
import { TaskService } from "../services/TaskService";
import styles from "./index.css";

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

/**
 * @todo Ready.
 */
export default class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			currentTast: {}
		}
		this.taskService = new TaskService();
		this.taskDrawerRef = React.createRef();
		this.showAlert = this.showAlert.bind(this);
	}
	
	componentDidMount() {
		this.getTasks();
	}

	listTasks() {
		const taskItems = this.state.tasks.map(task =>
				<TaskItem key={task.id} task={task} onClick={this.showAlert} />
		);
		return taskItems;
	}

	showAlert = (task) => {
		this.taskDrawerRef.current.loadAndShow(task);
	}

	newAlert = () => {
		this.taskDrawerRef.current.loadAndShow({});
	}

	taskDrawerForm = (ref) => {
		this.taskDrawerRef.current = ref;
	}

	refreshTasks = () => {
		this.getTasks();
	}

	getTasks = () => {
		this.taskService.all().then(tasks => {
			this.setState({tasks: tasks});
		}).catch(console.log);
	}
	
	render() {
		return (
			<Layout.Content>
				<div className={styles.fab_wrap}><Button onClick={this.newAlert} className={styles.fab} type="primary" shape="circle" icon="plus" size="large" /></div>
				<Masonry
					className={'my-gallery-class'} // default ''
					options={masonryOptions} // default {}
					disableImagesLoaded={false} // default false
					updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					imagesLoadedOptions={imagesLoadedOptions} // default {}
				>
					{this.listTasks()}
				</Masonry>
				<TaskDrawerForm onSave={this.refreshTasks} wrappedComponentRef={this.taskDrawerForm} />
			</Layout.Content>
		);
	}
}