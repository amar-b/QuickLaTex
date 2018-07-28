var exports = module.exports = {};
exports.lowerCaseSym = getLowerCaseSym;
exports.capitalSym = getCapitalSym;
exports.diacritics = getDiacritics;
exports.operators = getOperators;
exports.miscs = getMiscSym;

function getLowerCaseSym() {
  return { 
    α: "\\alpha",
    β: "\\beta",
    γ: "\\gamma",
    δ: "\\delta",
    ε: "\\epsilon",
    ζ: "\\zeta",
    η: "\\eta",
    θ: "\\theta",
    ι: "\\iota",
    κ: "\\kappa",
    λ: "\\lambda",
    μ: "\\mu",
    ν: "\\nu",
    ξ: "\\xi",
    π: "\\pi",
    ρ: "\\rho",
    ς: "\\varsigma",
    σ: "\\sigma",
    τ: "\\tau",
    υ: "\\upsilon",
    φ: "\\phi",
    χ: "\\chi",
    ψ: "\\psi",
    ω: "\\omega"
  }
}

function getCapitalSym() {
  return {
    Γ: "\\Gamma",
    Δ: "\\Delta",
    Θ: "\\Theta",
    Λ: "\\Lambda", 
    Ξ: "\\Xi",
    Π: "\\Pi",
    Σ: "\\Sigma",
    Υ: "\\Upsilon",
    Φ: "\\Phi",
    Ψ: "\\Psi",
    Ω: "\\Omega"
  }
}

function getMiscSym(){
  return {
    '∞': "\\infty",
    '∂': "\\partial",
    '∇': "\\nabla",
    '∅': "\\varnothing",
    '°': "\\degree"
  }
}


function getOperators() {
  let basepth = './images/operators/';
  return {
    times: {
      img: require(basepth + 'times.svg'),
      tex: '\\times'
    },
    div: {
      img: require(basepth + 'div.svg'),
      tex: '\\div'
    },
    pm: {
      img: require(basepth + 'pm.svg'),
      tex: '\\pm'
    },
    mp: {
      img: require(basepth + 'mp.svg'),
      tex: '\\mp'
    },
    cdot: {
      img: require(basepth + 'cdot.svg'),
      tex: '\\cdot'
    },
    star: {
      img: require(basepth + 'star.svg'),
      tex: '\\star'
    },
    leq: {
      img: require(basepth + 'leq.svg'),
      tex: '\\leq'
    },
    geq: {
      img: require(basepth + 'geq.svg'),
      tex: '\\geq'
    },
    neq: {
      img: require(basepth + 'neq.svg'),
      tex: '\\neq'
    },
    approx: {
      img: require(basepth + 'approx.svg'),
      tex: '\\approx'
    },
    propto: {
      img: require(basepth + 'propto.svg'),
      tex: '\\propto'
    },
    equiv: {
      img: require(basepth + 'equiv.svg'),
      tex: '\\equiv'
    },
  }
}

function getDiacritics() {
  let basepth = './images/diacritics/';
  return {
    dot: {
      img: require(basepth+'dot.svg'),
      tex: '\\dot{}'
    },
    ddot: {
      img: require(basepth + 'ddot.svg'),
      tex: '\\ddot{}'
    },
    acute: {
      img: require(basepth + 'acute.svg'),
      tex: '\\acute{}'
    },
    grave: {
      img: require(basepth + 'grave.svg'),
      tex: '\\grave{}'
    },
    check: {
      img: require(basepth + 'check.svg'),
      tex: '\\check{}'
    },
    breve: {
      img: require(basepth + 'breve.svg'),
      tex: '\\breve{}'
    },
    tilde: {
      img: require(basepth + 'tilde.svg'),
      tex: '\\tilde{}'
    },
    bar: {
      img: require(basepth + 'bar.svg'),
      tex: '\\bar{}'
    },
    hat: {
      img: require(basepth + 'hat.svg'),
      tex: '\\hat{}'
    },
    widehat: {
      img: require(basepth + 'widehat.svg'),
      tex: '\\widehat{}'
    },
    vec: {
      img: require(basepth + 'vec.svg'),
      tex: '\\vec{}'
    },    
  }
}
