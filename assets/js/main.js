// Main interactive script for Habimana Moise CV Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // 1. Conveyor counter animation ticker simulation
  const conveyorCountEl = document.getElementById('live-conveyor-count');
  if (conveyorCountEl) {
    let count = 1842;
    setInterval(() => {
      count += Math.floor(Math.random() * 2);
      conveyorCountEl.textContent = count.toLocaleString();
    }, 2400);
  }

  // 2. Inspection demo toggle
  const toggleBtn = document.getElementById('demo-toggle-inspect');
  const inspectStatus = document.getElementById('inspect-status-indicator');
  const inspectConfidence = document.getElementById('inspect-confidence-val');

  if (toggleBtn && inspectStatus && inspectConfidence) {
    let defective = true;
    toggleBtn.addEventListener('click', () => {
      defective = !defective;
      if (defective) {
        inspectStatus.textContent = 'DEFECT DETECTED';
        inspectStatus.className = 'status-indicator defect';
        inspectConfidence.textContent = '96.4% (Crack/Scratch)';
        toggleBtn.textContent = 'Switch to Normal Sample';
      } else {
        inspectStatus.textContent = 'INSPECTION PASS';
        inspectStatus.className = 'status-indicator pass';
        inspectConfidence.textContent = '99.1% (Zero Defect)';
        toggleBtn.textContent = 'Switch to Defective Sample';
      }
    });
  }

  // 3. Dynamic test badge total
  const testBadge = document.getElementById('total-tests-passed');
  if (testBadge) {
    testBadge.textContent = '117 Tests Passing';
  }

  console.log('Habimana Moise — Computer Vision & Machine Learning Engineer Portfolio Loaded.');
});
