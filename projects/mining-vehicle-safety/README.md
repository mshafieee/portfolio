# 🏭 Mining Vehicle Safety Control System

> **Safety-critical distributed CAN bus system protecting mining workers from dust exposure through real-time environmental monitoring and automated exhaust fan control.**

## 🎯 Project Overview

### **Challenge**
Mining vehicles operate in hazardous environments where dust exposure poses serious health risks to operators. Traditional manual control systems are inadequate for maintaining safe air quality in dynamic conditions.

### **Solution**
Distributed CAN bus control system that continuously monitors dust levels, differential pressure, and environmental conditions, automatically controlling exhaust fans to maintain safe air quality.

### **Results**
- ✅ **81% reduction** in operator dust exposure
- ✅ **<1 second** response time to dangerous conditions  
- ✅ **99.8% system reliability** over 12 months
- ✅ **Remote monitoring** with mobile app integration

---

## 🔧 Technical Architecture

### **System Components**
- **Master Controller:** STM32F407 with 7" Nextion HMI
- **Sensor Nodes:** Dust sensors, pressure sensors, temperature/humidity
- **Actuator Nodes:** Exhaust fan controllers, valve actuators  
- **Communication:** 500 kbps CAN bus network, BLE
- **Remote Access:** 4G LTE module with mobile app

### **CAN Bus Network**
Master Controller ←→ CAN Bus (500 kbps) ←→ Sensor/Actuator Nodes
↓
Nextion HMI
↓
Mobile App (BLE)

### **Safety Features**
- **Fail-Safe Operation:** Default to maximum extraction on fault
- **Redundant Sensors:** Dual sensor validation for critical measurements
- **Emergency Override:** Manual control capability
- **Watchdog Monitoring:** Hardware and software safety monitoring

---

## 📊 Performance Results

| **Metric** | **Target** | **Achieved** |
|------------|------------|--------------|
| **Response Time** | <2 seconds | **<1 second** |
| **System Reliability** | >99.5% | **99.8%** |
| **Dust Reduction** | >50% | **81%** |
| **Network Latency** | <100ms | **<50ms** |

---

## 💡 Key Innovations

### **1. Adaptive Control Algorithm**
Real-time adjustment of fan speeds based on multiple environmental parameters, not just dust levels.

### **2. Predictive Maintenance**
System monitors component performance and predicts maintenance needs before failures occur.

### **3. Over-CAN Firmware Updates**
Secure, authenticated firmware updates delivered over the CAN network without vehicle downtime.

### **4. Mobile Integration**
Real-time monitoring and historical data analysis through custom mobile application.

---

## 🛠️ Technologies Used

- **Microcontroller:** STM32F407 (ARM Cortex-M4)
- **Communication:** CAN Bus, 4G LTE, UART
- **HMI:** Nextion 7" touch display
- **Sensors:** Laser dust sensors, pressure transducers
- **Development:** STM32CubeIDE, C/C++
- **Mobile App:** Custom Android application

---

## 🏆 Industry Impact

This system represents a significant advancement in mining vehicle safety technology, setting new standards for automated environmental control in hazardous industrial environments.

**Compliance:** Meets all relevant mining safety standards and regulations.
**Scalability:** Architecture supports expansion to full mining fleet management.
