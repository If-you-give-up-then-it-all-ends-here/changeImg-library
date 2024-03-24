const generateImgSrcArray = (targetImg, extension)=>{
	return targetImg.split("/").pop().replace(`.${extension}`, "").split("_");
}

const changeImgSrcForTarget = (targetImg, extension) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg)

	if(!array[array.length -1].includes("after")){
		array.push("after")
		replacing_img = `${array.join("_")}.${extension}`
	}

	return replacing_img
}
const changeImgSrcForTargetWithMuliti = (targetImg, clickCount, count, extension) =>{
	let array = generateImgSrcArray(targetImg)

	if(!array[array.length -1].includes("after")){
		if(clickCount["count"] < count){
			array.push("after")
			clickCount["count"] ++
		}
		
	}else{
		array.splice(array.length -1, 1)

		clickCount["count"] --
	}
	return `${array.join("_")}.${extension}`
}


const changeImgSrcForOthers = (targetImg, others, extension) =>{
	let replacing_img = "";
	let array 		= generateImgSrcArray(targetImg)
	let array_others	= generateImgSrcArray(others)

	if(array[array.length -1].includes("after")){
		if(array_others[array_others.length -1].includes("after")){
			array_others.splice(array_others.length -1, 1)
			replacing_img = `${array_others.join("_")}.${extension}`
		}
	}else{
		if(!array[array.length -1].includes("after")){
			array_others.push("after")
			replacing_img = `${array_others.join("_")}.${extension}`
		}
	}

	return replacing_img
}


const changeAnswerImg = (answers, multi, count = "", extension)=>{
	let clickCount = {count: 0};

	console.log(clickCount);
	answers.forEach((answer)=>{
		answer.addEventListener("click", (e)=>{
			// 選択した答えのimgタグを取得
			let targetImg = e.target.src
			let otherImgs = Array.from(answers).filter((answer) => answer !== e.target)

			if(!multi){
				if(changeImgSrcForTarget(targetImg, extension) !== ""){
					e.target.src= `img/${changeImgSrcForTarget(targetImg, extension)}`
				}
				Array.from(otherImgs).forEach((otherImg)=>{
					if(otherImgs !== e.target){
						if(changeImgSrcForOthers(e.target.src, otherImg.src, extension) !== ""){
							otherImg.src= `img/${changeImgSrcForOthers(e.target.src, otherImg.src, extension)}`
						}
					}
				})
			}else{
				e.target.src= `img/${changeImgSrcForTargetWithMuliti(targetImg, clickCount, count, extension)}`
			}
		})
	})
}

export { changeAnswerImg };