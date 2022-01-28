import { Skills } from "./utils/types/skills.type"

declare module '@ckeditor/ckeditor5-build-classic'{
    const ClassicEditor
    export = ClassicEditor
}

declare module '@ckeditor/ckeditor5-vue2'{
    const CKEditor
    export = CKEditor
}

declare module '@/assets/skills.json'{
    const Langages: Array<Skills>
    export = Langages
}