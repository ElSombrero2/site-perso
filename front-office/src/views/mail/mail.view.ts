import { Component, Vue } from 'vue-property-decorator';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  components: {  },
})
export default class Mail extends Vue {
  public editor = ClassicEditor
  public config = {
    placeholder: 'Hello,',
    toolbar: [
      'bold', 'italic', '|',
      'link', 'blockQuote', '|',
  ],
  }
}