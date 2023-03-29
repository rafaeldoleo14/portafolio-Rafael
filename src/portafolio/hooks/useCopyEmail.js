
import { copy } from 'clipboard';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const useCopyEmail = () => {

    const onCopyEmail = ()=>{
        const email = 'rafaeldeoleo14@gmail.com';
        copy(email)
        Swal.fire('Email copiado', '', 'success')
    }

    return {
        onCopyEmail
    }

}
