import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class DrinkFrom extends React.Component {
	formRef = React.createRef();
	state = {
		open: false,
	};

	onFinish = (values) => {
		const url = "drinks";
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				if (data.ok) {
					this.handleCancel();

					return data.json();
				}
				throw new Error("Network error.");
			})
			.then(() => {
				this.props.reloadDrinks();
			})
			.catch((err) => console.error("Error: " + err));
	};

	showModal = () => {
		this.setState({
			open: true,
		});
	};

	handleCancel = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New Drink ..."
					open={this.state.open}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="brand"
							label="Brand"
							rules={[
								{ required: true, message: "Please input your drink's brand!" },
							]}
						>
							<Input placeholder="Input your drink's brand" />
						</Form.Item>

						<Form.Item
							name="style"
							label="Style"
							rules={[
								{ required: true, message: "Please input your drink's style!" },
							]}
						>
							<Input placeholder="Input your drink's style" />
						</Form.Item>

						<Form.Item
							name="country"
							label="Country"
							rules={[
								{
									required: true,
									message: "Please input your drink's country!",
								},
							]}
						>
							<Select
								showSearch
								placeholder="Select your drink's country"
								optionFilterProp="items"
								style={{ width: "100%" }}
							>
								<Option value="Finland">Finland</Option>
								<Option value="Germany">Germany</Option>
								<Option value="Netherlands">Netherlands</Option>
								<Option value="UK">UK</Option>
								<Option value="USA">USA</Option>
								<Option value="Kenya">Kenya</Option>
								<Option value="Other">Other</Option>
							</Select>
						</Form.Item>

						<Form.Item
							name="quantity"
							label="Quantity"
							rules={[
								{ required: true, message: "Please input the quantity!" },
							]}
						>
							<Input type="number" placeholder="How many drinks you desire?" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default DrinkFrom;