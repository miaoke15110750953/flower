function ajax({url,type,data,dataType}){
  return new Promise(function(open,err){
		//1. ����xhr����
		var xhr=new XMLHttpRequest();
		//2.�󶨼����¼�
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(dataType!==undefined
					&&dataType.toLowerCase()==="json")
					var res=JSON.parse(xhr.responseText)
				else
					var res=xhr.responseText
					
				open(res);
			}
		}
		if(type.toLowerCase()=="get"&&data!=undefined){
			url+="?"+data;
		}
		//3.������
		xhr.open(type,url,true);
		if(type.toLowerCase()==="post")
			//���ӣ�����������Ϣͷ
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//4.��������
		if(type.toLowerCase()=="post"&&data!==undefined)
			xhr.send(data);
		else
			xhr.send(null);
  })
}
/*
(async function(){
	//ES7
	var res=await ajax({
		url:"http://localhost:3000/index/",
		type:"get",
		dataType:"json"
	})
	//ES6
	.then(res=>{
		... ...
	})
})();
*/