const generateImgSrcArray = (targetImg)=>{
	return targetImg.split("/").pop().replace(".png", "").split("_");
}

const changeImgSrcForTarget = (targetImg) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg)

	if(!array[array.length -1].includes("c")){
		array.push("c")
		replacing_img = `${array.join("_")}.png`
	}

	return replacing_img
}
const changeImgSrcForTargetWithMuliti = (targetImg, clickCount, count) =>{
	let array = generateImgSrcArray(targetImg)

	if(!array[array.length -1].includes("c")){
		if(clickCount["count"] < count){
			array.push("c")
			clickCount["count"] ++
		}
		
	}else{
		array.splice(array.length -1, 1)

		clickCount["count"] --
	}
	return `${array.join("_")}.png`
}


const changeImgSrcForOthers = (targetImg, others) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg)
	let array_others	= generateImgSrcArray(others)

	if(array[array.length -1].includes("c")){
		if(array_others[array_others.length -1].includes("c")){
			array_others.splice(array_others.length -1, 1)
			replacing_img = `${array_others.join("_")}.png`
		}
	}else{
		if(!array[array.length -1].includes("c")){
			array_others.push("c")
			replacing_img = `${array_others.join("_")}.png`
		}
	}

	return replacing_img
}


const changeAnswerImg = (answers, multi, count = "")=>{
	let clickCount = {count: 0};

	console.log(clickCount);
	answers.forEach((answer)=>{
		answer.addEventListener("click", (e)=>{
			// 選択した答えのimgタグを取得
			let targetImg = e.target.src
			let otherImgs = Array.from(answers).filter((answer) => answer !== e.target)

			if(!multi){
				if(changeImgSrcForTarget(targetImg) !== ""){
					e.target.src= `img/${changeImgSrcForTarget(targetImg)}`
				}
				Array.from(otherImgs).forEach((otherImg)=>{
					if(otherImgs !== e.target){
						if(changeImgSrcForTarget(targetImg) !== ""){
							e.target.src= `img/${changeImgSrcForTarget(targetImg)}`
						}
						if(changeImgSrcForOthers(e.target.src, otherImg.src) !== ""){
							otherImg.src= `img/${changeImgSrcForOthers(e.target.src, otherImg.src)}`
						}
					}
				})
			}else{
				e.target.src= `img/${changeImgSrcForTargetWithMuliti(targetImg, clickCount, count)}`
			}
		})
	})
}

export { changeAnswerImg };