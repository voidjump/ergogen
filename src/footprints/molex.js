// Molex 530480260 connector for 2-pole Picoblade battery connector 
module.exports = {
    params: {
      designator: 'B', // the only semi-required param, for naming components on the PCB
      // and now any other param names, with default values supplied
      // note that the default value also tells Ergogen the param's type
        reference: "BAT",
        side: 'F',
        plus: undefined,
        minus: undefined,
    },
    body: p => {

      const pole_plus = p.side == 'F' ? p.plus : p.minus
      const pole_minus = p.side == 'F' ? p.minus : p.plus
      return `
        (footprint CONN02_530480260_MOL
        (layer ${p.side}.Cu)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference "BAT" (at 0.625 -2 unlocked) (layer ${p.side}.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value CONN02_530480260_MOL (at 0.625 0 unlocked) (layer ${p.side}.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value battery (at 0.625 0 unlocked) (layer ${p.side}.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (pad 1 thru_hole circle (at 0 0) (size 1.0668 1.0668) (drill 0.5588) (layers *.Cu *.Mask)  (solder_mask_margin 0.102) ${pole_plus})
        (pad 2 thru_hole circle (at 1.25 0) (size 1.0668 1.0668) (drill 0.5588) (layers *.Cu *.Mask)  (solder_mask_margin 0.102) ${pole_minus})
        (fp_line (start -1.7499 -1.304) (end -1.7499 4.7158) (layer "${p.side}.CrtYd") (width 0.1524))
        (fp_line (start -1.7499 4.7158) (end 2.9999 4.7158) (layer "${p.side}.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 4.7158) (end 2.9999 -1.304) (layer "${p.side}.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 -1.304) (end -1.7499 -1.304) (layer "${p.side}.CrtYd") (width 0.1524))
        (fp_line (start -1.6229 4.5888) (end 2.8729 4.5888) (layer "${p.side}.SilkS") (width 0.1524))
        (fp_line (start 2.8729 4.5888) (end 2.8729 -1.177) (layer "${p.side}.SilkS") (width 0.1524))
        (fp_line (start 2.8729 -1.177) (end -1.6229 -1.177) (layer "${p.side}.SilkS") (width 0.1524))
        (fp_line (start -1.6229 -1.177) (end -1.6229 4.5888) (layer "${p.side}.SilkS") (width 0.1524))
        (fp_line (start -1.4959 4.4618) (end 2.7459 4.4618) (layer "${p.side}.Fab") (width 0.0254))
        (fp_line (start 2.7459 4.4618) (end 2.7459 -1.05) (layer "${p.side}.Fab") (width 0.0254))
        (fp_line (start 2.7459 -1.05) (end -1.4959 -1.05) (layer "${p.side}.Fab") (width 0.0254))
        (fp_line (start -1.4959 -1.05) (end -1.4959 4.4618) (layer "${p.side}.Fab") (width 0.0254))
        )
      `
    }
}