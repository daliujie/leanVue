
const app = new Vue({
	el: "#app",
	data:{
		counter: 100
	},
	methods: {
		increment(){
			this.counter ++
		},
		descrement(){
			this.counter --
		}
	},
	
	
	components: {
		cpn: {
			template: "#myCpn",
			methods:{
				increment(){
//					this.counter ++
					this.$emit('increment')
				},
				descrement(){
//					this.counter --
					this.$emit('descrement')
				}
			},
			props: {
				counter:{
					type: Number,
					default:0
				}
			}
		}
	}
	
})



