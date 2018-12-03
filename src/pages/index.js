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

export default class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			currentTast: {}
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
				<TaskItem task={task} onClick={this.showAlert} />
		);
		return taskItems;
	}

	showAlert(task) {
		console.log(this.refs);
		// this.taskDrawerForm.current.loadAndShow(task);
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
				<TaskDrawerForm ref="taskDrawerForm" />
			</Layout.Content>
		);
	}
}