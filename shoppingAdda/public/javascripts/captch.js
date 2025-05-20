
            var getCaptcha = () => {
                var captchaText = generateCaptchaText('LNULN');
                document.querySelector(".block").innerText = captchaText;
                
            }
        