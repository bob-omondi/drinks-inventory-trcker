import { Table, message, Popconfirm } from "antd";
import React from "react";
import DrinkFrom from "./DrinkForm";

class Drinks extends React.Component {
	columns = [
		{
			title: "Brand",
			dataIndex: "brand",
			key: "brand",
		},
		{
			title: "Style",
			dataIndex: "style",
			key: "style",
		},
		{
			title: "Country",
			dataIndex: "country",
			key: "country",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this drink?"
					onConfirm={() => this.deleteDrink(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="red" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		drinks: [],
	};

	componentDidMount() {
		this.loadDrinks();
	}

	loadDrinks = () => {
		const url = "/drinks";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("Network error.");
			})
			.then((data) => {
				data.forEach((drink) => {
					const newEl = {
						key: drink.id,
						id: drink.id,
						brand: drink.brand,
						style: drink.style,
						country: drink.country,
						quantity: drink.quantity,
					};

					this.setState((prevState) => ({
						drinks: [...prevState.drinks, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadDrinks = () => {
		this.setState({ drinks: [] });
		this.loadDrinks();
	};

	deleteDrink = (id) => {
		const url = `drinks/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadDrinks();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.drinks}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<DrinkFrom reloadDrinks={this.reloadDrinks} />
			</>
		);
	}
}

export default Drinks;
