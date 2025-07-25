// Molex 530480260 connector for 2-pole Picoblade battery connector 
module.exports = {
    params: {
      designator: 'B', // the only semi-required param, for naming components on the PCB
      // and now any other param names, with default values supplied
      // note that the default value also tells Ergogen the param's type
        reference: "BAT",
        plus: undefined,
        minus: undefined,
        pole_top: { type: 'net', value: 'BAT_P1' },
        pole_bot: { type: 'net', value: 'BAT_P2' },
    },
    body: p => {
      return `
        (footprint CONN02_530480260_MOL
        (layer F.Cu)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference "BAT" (at 0.625 -2 ${p.r}) (layer F.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (pad 1 thru_hole circle (at 0 0) (size 1.0668 1.0668) (drill 0.5588) (layers F.Cu F.Mask)  (solder_mask_margin 0.102) ${p.pole_top})
        (pad 2 thru_hole circle (at 1.25 0) (size 1.0668 1.0668) (drill 0.5588) (layers F.Cu F.Mask)  (solder_mask_margin 0.102) ${p.pole_bot})
        (fp_line (start -1.7499 -1.304) (end -1.7499 4.7158) (layer "F.CrtYd") (width 0.1524))
        (fp_line (start -1.7499 4.7158) (end 2.9999 4.7158) (layer "F.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 4.7158) (end 2.9999 -1.304) (layer "F.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 -1.304) (end -1.7499 -1.304) (layer "F.CrtYd") (width 0.1524))
        (fp_line (start -1.6229 4.5888) (end 2.8729 4.5888) (layer "F.SilkS") (width 0.1524))
        (fp_line (start 2.8729 4.5888) (end 2.8729 -1.177) (layer "F.SilkS") (width 0.1524))
        (fp_line (start 2.8729 -1.177) (end -1.6229 -1.177) (layer "F.SilkS") (width 0.1524))
        (fp_line (start -1.6229 -1.177) (end -1.6229 4.5888) (layer "F.SilkS") (width 0.1524))
        (fp_line (start -1.4959 4.4618) (end 2.7459 4.4618) (layer "F.Fab") (width 0.0254))
        (fp_line (start 2.7459 4.4618) (end 2.7459 -1.05) (layer "F.Fab") (width 0.0254))
        (fp_line (start 2.7459 -1.05) (end -1.4959 -1.05) (layer "F.Fab") (width 0.0254))
        (fp_line (start -1.4959 -1.05) (end -1.4959 4.4618) (layer "F.Fab") (width 0.0254))

        (pad 1 smd rect (at -0.25 2 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.pole_top})
        (pad 1 smd rect (at -0.25 3 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.minus})

        (pad 2 smd rect (at 1.5 2 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.pole_bot})
        (pad 2 smd rect (at 1.5 3 ${p.r}) (size 1.143 0.635) (layers F.Cu F.Paste F.Mask) (clearance 0.1905) ${p.plus})

        (layer B.Cu)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference "BAT" (at 0.625 -2 ${p.r}) (layer B.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (pad 1 thru_hole circle (at 0 0) (size 1.0668 1.0668) (drill 0.5588) (layers *.Cu *.Mask)  (solder_mask_margin 0.102) ${p.pole_top})
        (pad 2 thru_hole circle (at 1.25 0) (size 1.0668 1.0668) (drill 0.5588) (layers *.Cu *.Mask)  (solder_mask_margin 0.102) ${p.pole_bot})
        (fp_line (start -1.7499 -1.304) (end -1.7499 4.7158) (layer "B.CrtYd") (width 0.1524))
        (fp_line (start -1.7499 4.7158) (end 2.9999 4.7158) (layer "B.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 4.7158) (end 2.9999 -1.304) (layer "B.CrtYd") (width 0.1524))
        (fp_line (start 2.9999 -1.304) (end -1.7499 -1.304) (layer "B.CrtYd") (width 0.1524))
        (fp_line (start -1.6229 4.5888) (end 2.8729 4.5888) (layer "B.SilkS") (width 0.1524))
        (fp_line (start 2.8729 4.5888) (end 2.8729 -1.177) (layer "B.SilkS") (width 0.1524))
        (fp_line (start 2.8729 -1.177) (end -1.6229 -1.177) (layer "B.SilkS") (width 0.1524))
        (fp_line (start -1.6229 -1.177) (end -1.6229 4.5888) (layer "B.SilkS") (width 0.1524))
        (fp_line (start -1.4959 4.4618) (end 2.7459 4.4618) (layer "B.Fab") (width 0.0254))
        (fp_line (start 2.7459 4.4618) (end 2.7459 -1.05) (layer "B.Fab") (width 0.0254))
        (fp_line (start 2.7459 -1.05) (end -1.4959 -1.05) (layer "B.Fab") (width 0.0254))
        (fp_line (start -1.4959 -1.05) (end -1.4959 4.4618) (layer "B.Fab") (width 0.0254))

        (pad 1 smd rect (at -0.25 2 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.pole_bot})
        (pad 1 smd rect (at -0.25 3 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.minus})

        (pad 2 smd rect (at 1.5 2 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.pole_top})
        (pad 2 smd rect (at 1.5 3 ${p.r}) (size 1.143 0.635) (layers B.Cu B.Paste B.Mask) (clearance 0.1905) ${p.plus})

        )

        (segment (start ${p.eaxy(0, 0)}) (end ${p.eaxy(-0.25, 2)}) (width 0.4) (layer "F.Cu"))
        (segment (start ${p.eaxy(1.25, 0)}) (end ${p.eaxy(1.5, 2)}) (width 0.4) (layer "F.Cu"))

        (segment (start ${p.eaxy(1.25, 0)}) (end ${p.eaxy(-0.25, 2)}) (width 0.4) (layer "B.Cu"))
        
        (segment (start ${p.eaxy(0, 0)}) (end ${p.eaxy(0, -1)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(0, -1)}) (end ${p.eaxy(2.25, -1)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(2.25, -0.95)}) (end ${p.eaxy(2.25, 1.25)}) (width 0.4) (layer "B.Cu"))
        (segment (start ${p.eaxy(2.25, 1.25)}) (end ${p.eaxy(1.5, 2)}) (width 0.4) (layer "B.Cu"))
      `
    }
}