import React from 'react'
import { Layout } from "antd";
import Header from "./Header";
import Drinks from './Drinks';

const Home = () => {
    const { Content, Footer } = Layout;
  return (
    <Layout className="layout">
		<Header />
		<Content style={{ padding: "0 50px" }}>
			<div className="site-layout-content" style={{ margin: "100px auto" }}>
				<h1>Drink's Catalog</h1>
				<Drinks />
			</div>
		</Content>
		<Footer style={{ textAlign: "center" }}>
            Drinksology ©2022.
		</Footer>
	</Layout>
  )
}

export default Home