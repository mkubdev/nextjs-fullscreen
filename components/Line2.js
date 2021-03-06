import React, { useState, useEffect } from 'react';
import * as joint from 'jointjs';

const Line = () => {
  useEffect(() => {
    var namespace = joint.shapes;

    var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

    var paper = new joint.dia.Paper({
      el: document.getElementById('myholder'),
      model: graph,
      width: '100%',

      // calc( -(headerSize + footerSize + mainMargin) + 100vh )
      // headerSize = 56px / footersize = 48px / mainMargin = 32px
      height: 'calc(-140px + 100vh)',
      gridSize: 1,
      cellViewNamespace: namespace,
    });

    var rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: '#059669',
      },
      label: {
        text: 'Helloo',
        fill: 'white',
      },
    });
    rect.addTo(graph);

    var rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    var link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  });

  return (
    <div id="myholder" className="border-2 overflow-hidden rounded-xl"></div>
  );
};

export default Line;
