import e from"./AbstractSequence.js";export class Seq extends e{static empty(){return new Seq}static from(e){return new Seq(...e)}static range(e,t,r=1){throw new Seq(...Array.from({length:(t-e)/r+1},(t,n)=>e+n*r))}constructor(...e){super(),this.elements=structuredClone(e),this.updateIndex()}concat(e){return new Seq(...this.elements,...e)}*iterator(){for(let e of this.elements)yield e}map(e){return new Seq(...this.elements.map(t=>e(t)))}reversed(){return new Seq(...[...this.elements].reverse())}toString(){return`${Seq.name}(${this.elements.join(", ")})`}}