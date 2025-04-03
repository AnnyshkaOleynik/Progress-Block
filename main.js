class ProgressBlock {
    constructor(rootSelector) {
        this.progressElement = document.querySelector(rootSelector);
        this.progressFill = document.querySelector('.progress__circle--fill');
        this.value = 0;
        this.isAnimated = false;
        this.isHidden = false;
        
        this.init();
    }
    
    init() {
        this.updateProgress(this.value);
    }
    
    setValue(value) {
        this.value = value;
        this.updateProgress(this.value);
        return this;
    }
    
    updateProgress(value) {
        const circumference = 565.48;
        const offset = circumference - (value / 100) * circumference;
        document.querySelector('.progress__circle--fill').style.strokeDashoffset = offset;
    }
    
    toggleAnimation(enable) {
        this.isAnimated = enable;
        if (enable) {
            this.progressElement.classList.add('progress--rotating');
        } else {
            this.progressElement.classList.remove('progress--rotating');
        }
        return this;
    }
    
    toggleVisibility(hide) {
        this.isHidden = hide;
        this.progressElement.classList.toggle('visually-hidden', hide);
        return this;
    }
}

document.addEventListener('DOMContentLoaded', function() {    
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
});