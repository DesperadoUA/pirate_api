const PostModel = require('../../models/PostsKnex')
const CategoryModel = require('../../models/CategoryKnex')
const RelativeModel = require('../../models/RelativeKnex')
const casinoSchema = require('../../schemas/casino')
const blogSchema = require('../../schemas/blog')
class Service {
	constructor() {
		this.schema = casinoSchema
		this.blogSchema = blogSchema
	}
	async getPublicPostByUrl(url) {
		const postModel = new PostModel(this.schema)
		const result = await postModel.getPublicPostByUrl(url)
		if (result) {
			const blogModel = new PostModel(this.blogSchema)
			const blogSetting = { limit: 2 }
			const blogResult = await blogModel.getPublicPosts(blogSetting)
			result.blog = blogResult
		}
		return result
	}
	async getPostById(id) {
		const postModel = new PostModel(this.schema)
		return await postModel.getPostById(id)
	}
	async getPublicCategoryByUrl(url) {
		const categoryModel = new CategoryModel(this.schema)
		const relativeModel = new RelativeModel(this.schema)
		const postModel = new PostModel(this.schema)
		const result = await categoryModel.getPublicPostByUrl(url)
		if (result) {
			const ids = await relativeModel.getPostIdByRelative(result.id, 'category')
			result.posts = await postModel.getPublicPostsByArrId(ids)
		}
		return result
	}
	async insert(commonData, metaData) {
		const postModel = new PostModel(this.schema)
		return await postModel.insert(commonData, metaData)
	}
	async delete(id) {}
	async update(id) {}
	async getPosts(settings) {}
	async getPublicPosts(settings) {}
}
module.exports = Service
