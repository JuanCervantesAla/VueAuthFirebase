(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,a){"use strict";a.r(e);var o=a("7a23");const i={class:"container"},c={class:"container my-4"},s={class:"input-group mb-3"},r={class:"input-group mb-3"},n={class:"input-group my-3"},l={class:"mt-3"},b={class:"mt-4"},u=["src"],d={class:"table"},g={scope:"row"},j=["onClick"],O=["onClick"];function h(t,e,a,h,m,p){const f=Object(o["x"])("Navbar");return Object(o["s"])(),Object(o["f"])("div",i,[Object(o["i"])(f),Object(o["g"])("div",c,[Object(o["g"])("form",null,[Object(o["g"])("div",s,[e[5]||(e[5]=Object(o["g"])("span",{class:"input-group-text"},"Nombre",-1)),Object(o["G"])(Object(o["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>m.usuario.nombre=t),type:"text",class:"form-control"},null,512),[[o["C"],m.usuario.nombre]])]),Object(o["g"])("div",r,[e[6]||(e[6]=Object(o["g"])("span",{class:"input-group-text"},"Correo",-1)),Object(o["G"])(Object(o["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>m.usuario.correo=t),type:"text",class:"form-control"},null,512),[[o["C"],m.usuario.correo]])]),Object(o["g"])("div",n,[Object(o["g"])("input",{type:"file",onChange:e[2]||(e[2]=t=>p.buscarImagen(t))},null,32)]),Object(o["g"])("div",l,[Object(o["G"])(Object(o["g"])("button",{onClick:e[3]||(e[3]=Object(o["H"])(e=>p.actualizarDato(t.id),["prevent"])),class:"btn btn-primary"}," Actualizar ",512),[[o["D"],!0===this.editar]]),Object(o["G"])(Object(o["g"])("button",{onClick:e[4]||(e[4]=Object(o["H"])(t=>p.agregarDato(),["prevent"])),class:"btn btn-primary"}," Guardar ",512),[[o["D"],!1===this.editar]]),Object(o["g"])("div",b,[Object(o["g"])("img",{src:m.datoImagen},null,8,u)])])])]),Object(o["g"])("table",d,[e[7]||(e[7]=Object(o["g"])("thead",null,[Object(o["g"])("tr",null,[Object(o["g"])("th",{scope:"col"},"id"),Object(o["g"])("th",{scope:"col"},"Nombre"),Object(o["g"])("th",{scope:"col"},"Correo"),Object(o["g"])("th",{scope:"col"},"Editar"),Object(o["g"])("th",{scope:"col"},"Eliminar")])],-1)),Object(o["g"])("tbody",null,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(m.usuarios,(t,e)=>(Object(o["s"])(),Object(o["f"])("tr",{key:e},[Object(o["g"])("th",g,Object(o["A"])(e),1),Object(o["g"])("td",null,Object(o["A"])(t.nombre),1),Object(o["g"])("td",null,Object(o["A"])(t.correo),1),Object(o["g"])("td",null,[Object(o["g"])("button",{onClick:Object(o["H"])(e=>{p.obtenerDatoID(t.id),this.editar=!this.editar},["prevent"]),class:"btn btn-primary"},"Editar ",8,j)]),Object(o["g"])("td",null,[Object(o["g"])("button",{onClick:Object(o["H"])(e=>p.eliminarDato(t.id),["prevent"]),class:"btn btn-danger"},"Eliminar ",8,O)])]))),128))])])])}a("14d9");var m=a("d178"),p=a("5502"),f=a("56d7"),v=a("aedf"),w=a("a18c"),y={name:"About",components:{Navbar:m["a"]},data(){return{file:null,datoImagen:null,error:null,editar:!1,loading:!1,usuarios:[],usuario:{nombre:"",correo:"",foto:""}}},methods:{async obtenerDatos(){const t=await Object(p["f"])(Object(p["b"])(f["db"],"usuarios"));t.forEach(t=>{let e=t.data();e.id=t.id,this.usuarios.push(e),console.log(e)})},async eliminarDato(t){await Object(p["c"])(Object(p["d"])(f["db"],"usuarios",t)),w["a"].go("/")},async obtenerDatoID(t){const e=Object(p["d"])(f["db"],"usuarios",t),a=await Object(p["e"])(e);a.exists()?(this.usuario=a.data(),this.usuario.id=a.id):console.log("¡No existe el documento!")},buscarImagen(t){const e=t.target.files[0].type;if("image/jpeg"!==e&&"image/png"!==e)return this.error="Archivo no válido",void(this.file=null);this.file=t.target.files[0],this.error=null;const a=new FileReader;a.readAsDataURL(this.file),a.onload=t=>{this.datoImagen=t.target.result}},async agregarDato(){try{this.loading=!0;var t=v["a"].storage().ref();await t.child("imagenes").child(this.file.name).put(this.file);const e=await t.child("imagenes").child(this.file.name).getDownloadURL();await Object(p["a"])(Object(p["b"])(f["db"],"usuarios"),{nombre:this.usuario.nombre,correo:this.usuario.correo,foto:e}),this.error="Imagen subida con éxito",this.file=null}catch(e){console.log(e)}finally{w["a"].push("/"),this.loading=!1}},async actualizarDato(){try{this.loading=!0;var t=v["a"].storage().ref();await t.child("imagenes").child(this.file.name).put(this.file);const e=await t.child("imagenes").child(this.file.name).getDownloadURL(),a=Object(p["d"])(f["db"],"usuarios",this.usuario.id);await Object(p["h"])(a,{nombre:this.usuario.nombre,correo:this.usuario.correo,foto:e}),this.error="Imagen subida con éxito",this.file=null}catch(e){console.log(e)}finally{w["a"].push("/"),this.loading=!1}}},mounted(){this.obtenerDatos()}},D=a("6b0d"),C=a.n(D);const k=C()(y,[["render",h]]);e["default"]=k}}]);
//# sourceMappingURL=about.5a854298.js.map