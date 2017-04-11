// JavaScript Document
$(function(){
	/*===================局部方法,适合静态页面=================================*/
   /*get方式提交 
   $('.ajax').on('click',function(){
	    //$('#box').load('ajax子文件.html')//局部加载ajax方法全部文档
		//$('#box').load('ajax子文件.html span')//加载其中一条
		//$('#box').load('ajax子文件.html .con')	
		$('#box').load('ajax.php')
	})	*/
	
	//post方法
	/*$('.ajax').on('click',function(){
	    $('#box').load('ajax.php',{
			    url:'123'
			},function(response,status,xhr){
			    alert(response);//php内容
				alert(status);//success
				console.log(xhr);	//对象
				$('#box').html(response + '123')//给php添加内容
			})	
	})*/
	/*====================全局方法，适合动态页面===========================================*/
	
	
	/*json方法
	$('.ajax').on('click',function(){
		 $.ajax({
			  type:"get",
			  url:"ajax.json",
			  dataType:"json",
			  success:function(data){
				 $('#box').html(data[0].news)	
			  }
		 })
	});*/
	
	/*
	php方法
	$('.ajax').on('click',function(){
		 $.ajax({
			  type:"get",
			  url:"ajax.php",
			  dataType:"html",
			  success:function(data){
				 $('#box').html(data)	
			  }
		 })
	});*/
	
	/*js方法
	$('.ajax').on('click',function(){
	    $.getScript('ajaxJS.js')	
	})*/
	/*json方法
	$('.ajax').on('click',function(){
	    $.getJSON('ajax.json',function(response,status,xhr){
		     $('#box').html(response[0].news)	
		})	
	})*/
	
	/*==================通用方法===============================*/
	/*$('form input[type=button]').on('click',function(){
		 $.ajax({
			  type:"POST",
			  url:"ajax.php",
			  data:{
				  url:'123'  //网址后缀
			  },
			  dataType:"html",
			  success:function(data){
				 $('#box').html(data)	
			  }
		 })
	})*/
	/*================表单序列化============================*/
	/*$('form input[type=button]').on('click',function(){
		 $.ajax({
			  type:"POST",
			  url:"test.php",
              data:$('form').serialize(),//表单序列化
              dataType:"html",
			  success:function(response,status,xhr){
				  console.log(response)
				 $('#box').html(response)	
			  }
		 })
	})
	alert($('form').serialize());
	
	$('form input[name=sex]').click(function(){
        $('#box').html(decodeURIComponent($('form').serialize()))
	})//表单序列化
	
	$('form .btn').click(function(){//json方法序列化
       var json = $('form').serializeArray();
	    $('#box').html(json[0].name)
	})
	*/
	/*=================初始化ajax，即封装===============================*/
	/*$.ajaxSetup({
	     type:"POST",
			  url:"test.php",
              data:$('form').serialize(),//表单序列化
              dataType:"html",	
	});
	
	$('form input[type=button]').click(function(){
		 $.ajax({
			  success:function(response,status,xhr){
				  console.log(response)
				 $('#box').html(response)	
			  }
		 })
	})*/
	
	$('form input[type=button]').on('click',function(){
		 $.ajax({
			  type:"POST",
			  url:"test.php",
              data:$.param({
			     username:$('form input[name=username]').val(),
				 email:$('form input[name=email]').val()
			  }),//当兼键值对很复杂，解析困难时用
              dataType:"html",
			  success:function(response,status,xhr){
				  console.log(response)
				 $('#box').html(response)	
			  }
		 })
	})
	
})
