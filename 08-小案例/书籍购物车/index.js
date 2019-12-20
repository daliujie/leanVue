let books = [
	{
		name: "大数据",
		price: 78.89,
		num:1,
	},
	{
		name: "c++",
		price: 63,
		num:1,
	},
	{
		name: "java",
		price: 48,
		num:1,
	},
	{
		name: "js",
		price: 19,
		num:1,
	},
	{
		name: "html",
		price: 80,
		num:1,
	},
]

const app = new Vue({
	el:"#bookTable",
	data:{
		books: books
	},
	methods:{
		addBuyNum: function(book){
			book.num ++
		},
		subBuyNum:function(book){
			book.num -- ;
		},
		removeBook(index){
			console.log(index)
			this.books.splice(index,1)
		}
	},
	filters:{//定义过滤器，可以格式化
//		tofixPrice: function(price){
//			return price.toFixed(2); 
//		}
		tofixPrice: x => x.toFixed(2)
	},
	computed:{//定义所有的计算属性
		totalPrice: function(){
			return this.books.reduce(function(prev,cur){
				return prev + cur.num * cur.price;
			},0)
		}
		
	}
	
})