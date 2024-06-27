import lottie from "lottie-web"

export const lottieAnimations = () => {
    const animationContainer = document.getElementById("lottie-animation")

    const animationData = {
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../files/Hero.json",
    }

    const animationContainer1 = document.getElementById("lottie-animation-1")

    const animationData1 = {
        container: animationContainer1,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../files/CTA-1.json",
    }

    const animationContainer2 = document.getElementById("lottie-animation-2")

    const animationData2 = {
        container: animationContainer2,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "../files/CTA-2.json",
    }

    const anim = lottie.loadAnimation(animationData)
    const anim1 = lottie.loadAnimation(animationData1)
    const anim2 = lottie.loadAnimation(animationData2)

    anim.play()
    anim1.play()
    anim2.play()
}
