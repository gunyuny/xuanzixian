var exit_el = new Vue({
	el:"#exit",
	data: {},
	methods:{
		exit(){
			window.location.href = "login.html"
		}
	}
})

var welcome_el = new Vue({
	el:"#welcome",
	data:{
		name: "ame"
	}
})

var meun_el = new Vue({
	el:"#meun",
	data:{
		title:['讨论区','课程表','计算器','个人中心','学生管理中心','暂时还没想到'],
		msg: ""
	},
	methods:{
		choose(i){
			for(var a=0;a<this.title.length;a++){
				this.$el.children[a].className = "title"
			}
			this.$el.children[i].className = "title turnred"
		}
	}
})

