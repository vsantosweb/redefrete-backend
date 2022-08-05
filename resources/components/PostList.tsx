import React from "react"
import DriverResource from "../../repository/drivers/api";
import DriverRepository from "../../repository/drivers/driver.respository";
const { list } = DriverRepository();

const resource = DriverResource(list)
function PostList() {
	const posts = resource.read()
    console.log(posts, 'aksfopkasofksaop')
	return (
		<h1>{posts?.title}</h1>
	)
}

export default React.memo(PostList)