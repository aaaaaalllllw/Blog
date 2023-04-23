# 方案1：数组+自定义指令

把权限放到数组中，通过vue的自定义指令来判断是否拥有该权限

## 可以把这个按钮需要的权限放到组件上

```html
<el-button
 v-hasPermin="['home:advertising:update']"
>新建</el-button>
```

## 自定义指令

```js
    export default{
        inserted(el,binding,vnode){
            const {value}=binding
            const SuperPerssion="superAdmin";//超级用户，用于开发和测试
            const permissions=localStorage.getItem('userPermissions')
            //判断传入的组件权限是否符合要求
            if(value&&value instanceof Array && value.length>0){
                const permissionFlag=value
                const hasPermissions=permissions
                //判断是否有权限是否要展示
                if(!hasPermssions){
                    el.parentNode&&el.parentNode.removeChild(el)
                }else{
                    throw Error(`请设置操作权限标签值`)
                }

            }

        }
    }
```

## 注册权限

```js
import Vue from 'vue'
import Vpermission from './permission'

//按钮权限 自定义指令
Vue.directive('permission',Vpermission)
```
## 补充路由权限

通过meta中携带该路由所需的权限

```js
const router=[{
     path: 'needPermissionPage',
  name: 'NeedPermissionPage',
  meta: {
    role: ['permissionA', 'permissionB'],
  },
}]

```