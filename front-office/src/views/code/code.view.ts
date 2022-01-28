import { Skills, Skill } from './../../utils/types/skills.type';
import { Component, Vue, Watch } from 'vue-property-decorator';
import Langages from '../../assets/skills.json'

@Component({
  components: { },
})
export default class Code extends Vue{

  public langage: Skills | null = null
  public selected: Skill | null = null
  public show = false

  public changeItem(item: Skill): void{
    this.show = false
    const glass = this.$refs['glass'] as HTMLElement
    glass.classList.add('transparent')
    setTimeout(() => {
      this.selected = item
      glass.classList.remove('transparent')
    },100)
  }

  public toogle(): void{ this.show = !this.show }

  public nextIndex(): number{
    const index = parseInt(this.$route.params.index)
    return (index + 1 < Langages.length) ? index + 1 : 0 
  }

  public prevIndex(): number{
    const index = parseInt(this.$route.params.index)
    return (index - 1 >= 0) ? index - 1 : Langages.length - 1 
  }

  @Watch('$route', {immediate: true})
  public initialize(): void{
    try{
      const index = parseInt(this.$route.params.index)
      this.langage = Langages[index]
      this.selected = this.langage.default[0]
      this.show = false
    }catch(e){ console.log(e) }
  }

}