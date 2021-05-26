import emailjs from 'emailjs-com';
import './style.css'

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        
            emailjs.sendForm('service_c90455z', 'jess_feedback', e.target, 'user_M64Wdoo1hQ52ATPeLyTNm')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
    }

    return (
        
        <div className="container1">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" onSubmit={sendEmail}>
                            <fieldset>
                                <legend className="text-center"></legend>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" for="name">Name</label>
                                    <div className="col-md-9">
                                        <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" for="email">Your E-mail</label>
                                    <div className="col-md-9">
                                        <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" for="message">Your message</label>
                                    <div className="col-md-9">
                                        <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn-primary btn-sm" >Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

export default Contact;