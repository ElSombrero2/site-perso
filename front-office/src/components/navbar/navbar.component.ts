import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Navbar extends Vue {

  public constructor(){
    super()
  }

  public slide(index: number): void{
    const cursor = this.$refs['cursor'] as HTMLElement
    cursor.style.transform = 'translateY(' + index * 50 + 'px)'
  }

}