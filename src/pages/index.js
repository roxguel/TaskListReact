import React, { Component } from 'react';
import { Layout } from 'antd';
import Masonry from 'react-masonry-component';
import TaskItem from "../components/TaskItem";
import TaskDrawerForm from "../components/TaskDrawer";
import { TaskService } from "../services/TaskService";

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
/**
 * @todo Refresh data on save task.
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
		this.taskService.all().then(tasks => {
			this.setState({tasks: tasks});
		}).catch(console.log);
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

	taskDrawerForm = (ref) => {
		this.taskDrawerRef.current = ref;
	}

	render() {
		return (
			<Layout.Content>
				<Masonry
					className={'my-gallery-class'} // default ''
					options={masonryOptions} // default {}
					disableImagesLoaded={false} // default false
					updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					imagesLoadedOptions={imagesLoadedOptions} // default {}
				>
					{this.listTasks()}
				</Masonry>
				<TaskDrawerForm wrappedComponentRef={this.taskDrawerForm} />
			</Layout.Content>
		);
	}
}