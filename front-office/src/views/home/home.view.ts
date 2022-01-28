import { Component, Vue } from 'vue-property-decorator';
import Graduation from './graduation/graduation.component.vue'
import Work from './work/work.component.vue'
import Profile from './profile/profile.component.vue'

@Component({
  components: { Graduation, Profile, Work  },
})
export default class Home extends Vue {}