import svgPanZoom from 'svg-pan-zoom'
let panZoomInstance = null

export function useZoom () {
  
function mappaZoom(svgRef) {
  panZoomInstance = svgPanZoom(svgRef.value,{
  zoomEnabled: true,
  controlIconsEnabled: false,
  fit: true,
  center: true,
  panEnabled: true,
  minZoom: 1.00,
  maxZoom: 3,
  zoomScaleSensitivity: 0.105,

  beforePan: (oldPan, newPan) => {
    const bBox = svgRef.value.getBBox()
    const zoom = panZoomInstance.getZoom()
    const winWidth = window.innerWidth
    const winHeight = window.innerHeight

    const scaledWidth = bBox.width * zoom
    const scaledHeight = bBox.height * zoom

    const margin = 300;

    const xDiff = scaledWidth - winWidth;
    const yDiff = scaledHeight - winHeight;

    const panLimits = {
      xMin: xDiff > 0 ? -xDiff - margin : -margin,
      xMax: xDiff > 0 ? 0 + margin : margin,
      yMin: yDiff > 0 ? -yDiff - margin : -margin,
      yMax: yDiff > 0 ? 0 + margin : margin,
    };

    const clamped = {
      x: Math.min(Math.max(newPan.x, panLimits.xMin), panLimits.xMax),
      y: Math.min(Math.max(newPan.y, panLimits.yMin), panLimits.yMax)
    }

    return clamped.x === newPan.x && clamped.y === newPan.y
  }
})
}

function resetZoom() {
  if (panZoomInstance) {
    panZoomInstance.resetZoom()
    panZoomInstance.center()
  }
}
    return {
        mappaZoom,
        resetZoom,
    }
}