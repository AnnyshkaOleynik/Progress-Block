const CIRCLE_LENGTH = 2 * Math.PI * 90;

class ProgressBlock {    
    value = 0;
    isAnimated = false;
    isHidden = false; 

    constructor(rootSelector) {
        this.progressElement = document.querySelector(rootSelector);     
    }
    
    setValue(value) {
        this.value = value;
        this.updateProgress(this.value);
    }
    
    updateProgress(value) {
        const offset = CIRCLE_LENGTH - (value / 100) * CIRCLE_LENGTH;
        this.progressElement.querySelector('.progress__circle--fill').style.strokeDashoffset = offset;
    }
    
    toggleAnimation(enable) {
        this.isAnimated = enable;
        if (enable) {
            this.progressElement.classList.add('progress--rotating');
        } else {
            this.progressElement.classList.remove('progress--rotating');
        }
    }
    
    toggleVisibility(hide) {
        this.isHidden = hide;
        this.progressElement.classList.toggle('progress--hidden', hide);
    }
}

    const progress = new ProgressBlock('.progress');
    
    const numberInput = document.getElementById('number-input');
    const switchAnimate = document.getElementById('switch-animate');
    const switchHide = document.getElementById('switch-hide');    
    
    numberInput.addEventListener('input', function() {
        const value = Math.min(100, Math.max(0, this.value || 0));
        this.value = value;
        progress.setValue(value);
    });
    
    switchAnimate.addEventListener('change', function() {
        progress.toggleAnimation(this.checked);
    });
    
    switchHide.addEventListener('change', function() {
        progress.toggleVisibility(this.checked);
    });