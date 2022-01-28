import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Navbar extends Vue {

  private routes: Array<string> = ['Home', 'Project', 'Code', 'Email'] 

  public constructor(){
    super()
  }

  public mounted(): void {
    const index = this.routes.indexOf(this.$route.name)
    const cursor = this.$refs['cursor'] as HTMLElement
    cursor.style.transform = 'translateY(' + (index + 1) * 50 + 'px)'
  }

  public slide(index: number, location: string): void{
    const cursor = this.$refs['cursor'] as HTMLElement
    cursor.style.transform = 'translateY(' + index * 50 + 'px)'
    this.$router.push({path: location})
  }

}