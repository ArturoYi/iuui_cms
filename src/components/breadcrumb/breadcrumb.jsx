import { getChild } from "../utils/utils"

export default{
    name:'Breadcrumb',
    render(){
        return <div class="u-breadcrumb">{getChild(this.$slots.default)}</div>
    },
}