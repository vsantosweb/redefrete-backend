import { NextPage } from "next";
import React from "react";
import { Layout } from "./resources/layouts";

const withLayout = (Component, layoutType) => {

    return <Layout layoutType={layoutType}>{Component}</Layout>
}

export default withLayout;